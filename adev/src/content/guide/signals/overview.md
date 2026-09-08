> 🌐 本文档由 [angular/angular](https://github.com/angular/angular) 翻译,英文原版见原项目。
> ℹ️ 本文件超过 10000 字符,以下为核心章节的完整中文翻译;代码块与链接保持原样。

<docs-decorative-header title="Angular Signals" imgSrc="adev/src/assets/images/signals.svg"> <!-- markdownlint-disable-line -->
Angular Signals 是一套细粒度追踪状态在应用中被如何、何处使用的系统,让框架得以优化渲染更新。
</docs-decorative-header>

TIP: 在深入这份完整指南之前,建议先阅读 Angular 的 [Essentials](essentials/signals)。

## 什么是 signal?

**signal(信号)**是对一个值的包装器,当该值发生变化时会通知感兴趣的消费者。Signal 可以承载任何值,从原始类型到复杂的数据结构都可以。

通过调用 signal 的 getter 函数来读取它的值,这让 Angular 能够追踪 signal 被使用的位置。

Signal 分为_可写(writable)_和_只读(read-only)_两种。

### 可写 signal

可写 signal 提供直接更新其值的 API。调用 `signal` 函数并传入初始值即可创建可写 signal:

```ts
const count = signal(0);

// Signals are getter functions - calling them reads their value.
console.log('The count is: ' + count());
```

要修改可写 signal 的值,可以直接 `.set()`:

```ts
count.set(3);
```

或者使用 `.update()` 操作,基于上一个值计算新值:

```ts
// Increment the count by 1.
count.update((value) => value + 1);
```

可写 signal 的类型是 `WritableSignal`。

#### 将可写 signal 转换为只读

`WritableSignal` 提供了 `asReadonly()` 方法,返回该 signal 的只读版本。当你想把 signal 的值暴露给消费者、又不允许他们直接修改时,这很有用:

```ts
@Service()
export class CounterState {
  // Private writable state
  private readonly _count = signal(0);

  readonly count = this._count.asReadonly(); // public readonly

  increment() {
    this._count.update((v) => v + 1);
  }
}

@Component({
  /* ... */
})
export class AwesomeCounter {
  state = inject(CounterState);

  count = this.state.count; // can read but not modify

  increment() {
    this.state.increment();
  }
}
```

只读 signal 会反映原始可写 signal 的任何变化,但不能通过 `set()` 或 `update()` 方法修改。

IMPORTANT: 只读 signal **没有**任何内建机制来阻止对其值的深层修改(deep-mutation)。

### 计算 signal(computed signals)

**计算 signal** 是从其他 signal 派生值的只读 signal。使用 `computed` 函数并指定派生逻辑来定义计算 signal:

```typescript
const count: WritableSignal<number> = signal(0);
const doubleCount: Signal<number> = computed(() => count() * 2);
```

`doubleCount` signal 依赖 `count` signal。每当 `count` 更新时,Angular 都知道 `doubleCount` 也需要更新。

#### 计算 signal 既是惰性求值的,也是记忆化的

`doubleCount` 的派生函数直到你第一次读取 `doubleCount` 时才会执行。计算出的值会被缓存,再次读取 `doubleCount` 时会直接返回缓存值,而不会重新计算。

之后如果你修改了 `count`,Angular 知道 `doubleCount` 的缓存值已失效,下次读取 `doubleCount` 时会重新计算新值。

因此,你可以放心在计算 signal 中执行开销较大的派生运算,例如过滤数组。

#### 计算 signal 不是可写 signal

你不能直接给计算 signal 赋值。也就是说,

```ts
doubleCount.set(3);
```

会产生编译错误,因为 `doubleCount` 不是 `WritableSignal`。

#### 计算 signal 的依赖是动态的

只有派生过程中真正被读取的 signal 才会被追踪。例如下面这个 `computed`,只有当 `showCount` signal 为 true 时才会读取 `count` signal:

```ts
const showCount = signal(false);
const count = signal(0);
const conditionalCount = computed(() => {
  if (showCount()) {
    return `The count is ${count()}.`;
  } else {
    return 'Nothing to see here!';
  }
});
```

当你读取 `conditionalCount` 时,如果 `showCount` 为 `false`,会返回 "Nothing to see here!" 消息而_不_读取 `count` signal。这意味着之后更新 `count` 也_不会_触发 `conditionalCount` 的重新计算。

如果你把 `showCount` 设为 `true` 后再次读取 `conditionalCount`,派生函数会重新执行,走到 `showCount` 为 `true` 的分支,返回包含 `count` 值的消息。此后修改 `count` 就会使 `conditionalCount` 的缓存值失效。

注意,依赖在派生过程中既可能被添加,也可能被移除。如果之后你把 `showCount` 改回 `false`,`count` 将不再被视为 `conditionalCount` 的依赖。

## 响应式上下文

**响应式上下文(reactive context)**是一种运行时状态,Angular 在其中监控 signal 的读取以建立依赖关系。读取 signal 的代码是_消费者(consumer)_,被读取的 signal 是_生产者(producer)_。

Angular 会在以下情况自动进入响应式上下文:

- 执行 `effect`、`afterRenderEffect` 回调时。
- 求值 `computed` signal 时。
- 求值 `linkedSignal` 时。
- 求值 `resource` 的 params 或 loader 函数时。
- 渲染组件模板时(包括 [host 属性](guide/components/host-elements#binding-to-the-host-element)中的绑定)。

在这些操作期间,Angular 会建立一个_活跃_连接。如果被追踪的 signal 发生变化,Angular _最终_会重新运行消费者。

### 断言响应式上下文

Angular 提供了 `assertNotInReactiveContext` 辅助函数,用于断言代码没有在响应式上下文中执行。传入对调用函数的引用,这样断言失败时错误信息会指向正确的 API 入口。这比笼统的响应式上下文错误信息更清晰、更具可操作性。

```ts
import {assertNotInReactiveContext} from '@angular/core';

function subscribeToEvents() {
  assertNotInReactiveContext(subscribeToEvents);
  // Safe to proceed - subscription logic here
}
```

### 读取但不追踪依赖

少数情况下,你可能希望在 `computed`、`effect` 等响应式函数中执行的代码虽然读取了 signal,却_不_建立依赖。

例如,假设你想在 `currentUser` 变化时打印 `counter` 的值。你可以创建一个同时读取两个 signal 的 `effect`:

```ts
effect(() => {
  console.log(`User set to ${currentUser()} and the counter is ${counter()}`);
});
```

这个例子在 `currentUser` _或_ `counter` 任何一个变化时都会打印消息。但如果这个 effect 只应在 `currentUser` 变化时运行,那么对 `counter` 的读取只是附带的,`counter` 的变化不应触发新消息。

调用 signal 的 getter 时套上 `untracked`,即可避免这次读取被追踪:

```ts
effect(() => {
  console.log(`User set to ${currentUser()} and the counter is ${untracked(counter)}`);
});
```

当 effect 需要调用某些不应被视为依赖的外部代码时,`untracked` 同样有用:

```ts
effect(() => {
  const user = currentUser();
  untracked(() => {
    // If the `loggingService` reads signals, they won't be counted as
    // dependencies of this effect.
    this.loggingService.log(`User set to ${user}`);
  });
});
```

### 响应式上下文与异步操作

响应式上下文只对同步代码有效。任何发生在异步边界之后的 signal 读取都不会被追踪为依赖。

```ts {avoid}
effect(async () => {
  const data = await fetchUserData();
  // Reactive context is lost here - theme() won't be tracked
  console.log(`User: ${data.name}, Theme: ${theme()}`);
});
```

为确保所有 signal 读取都被追踪,请在 `await` 之前读取 signal。包括把它们作为参数传给被 await 的函数——参数是同步求值的:

```ts {prefer}
effect(async () => {
  const currentTheme = theme(); // Read before await
  const data = await fetchUserData();
  console.log(`User: ${data.name}, Theme: ${currentTheme}`);
});
```

```ts {prefer}
effect(async () => {
  // Also works: signal is read before await (as function argument)
  await renderContent(docContent());
});
```

## 高级派生

`computed` 处理的是简单的只读派生,但有时你可能需要依赖其他 signal 的可写状态。
更多信息参见 [使用 linkedSignal 的依赖状态](/guide/signals/linked-signal) 指南。

所有 signal API 都是同步的——`signal`、`computed`、`input` 等。然而,应用经常需要处理异步到达的数据。`Resource` 提供了一种把异步数据融入应用基于 signal 的代码、同时仍能同步访问其数据的方式。更多信息参见 [使用 resource 的异步响应式](/guide/signals/resource) 指南。

## 在非响应式 API 上执行副作用

当我们需要对状态变化做出反应时,推荐使用同步或异步派生。但这并不能覆盖所有用例,有时你需要对非响应式 API 上的 signal 变化做出反应。针对这类特定用例,请使用 `effect` 或 `afterRenderEffect`。更多信息参见[非响应式 API 的副作用](/guide/signals/effect)指南。

## 在 `OnPush` 组件中读取 signal

当你在 `OnPush` 组件的模板中读取 signal 时,Angular 会把该 signal 追踪为该组件的依赖。当该 signal 的值变化时,Angular 会自动[标记](api/core/ChangeDetectorRef#markforcheck)该组件,确保下次变更检测运行时它会被更新。有关 `OnPush` 组件的更多信息,参阅[跳过组件子树](best-practices/skipping-subtrees)指南。

## 高级主题

### Signal 相等性函数

创建 signal 时,你可以选择提供一个相等性函数,用于判断新值是否与旧值真正不同。

```ts
import isEqual from 'lodash/isEqual';

const data = signal(['test'], {equal: isEqual});

// Even though this is a different array instance, the deep equality
// function will consider the values to be equal, and the signal won't
// trigger any updates.
data.set(['test']);
```

可写 signal 和计算 signal 都可以提供相等性函数。

HELPFUL: 默认情况下,signal 使用引用相等性([`Object.is()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/is) 比较)。

### Signal 类型检查

你可以使用 `isSignal` 检查一个值是否是 `Signal`:

```ts
const count = signal(0);
const doubled = computed(() => count() * 2);

isSignal(count); // true
isSignal(doubled); // true
isSignal(42); // false
```

要专门检查某个 signal 是否可写,使用 `isWritableSignal`:

```ts
const count = signal(0);
const doubled = computed(() => count() * 2);

isWritableSignal(count); // true
isWritableSignal(doubled); // false
```

## 与 RxJS 一起使用 signal

signal 与 RxJS 的互操作详情参见 [RxJS 与 Angular signals 互操作](ecosystem/rxjs-interop)。
