> 🌐 本文档由 [angular/angular](https://github.com/angular/angular) 翻译,英文原版见原项目。

<docs-decorative-header title="模板语法" imgSrc="adev/src/assets/images/templates.svg"> <!-- markdownlint-disable-line -->
在 Angular 中,模板就是一段 HTML。
在模板中使用特殊语法,即可运用 Angular 的众多特性。
</docs-decorative-header>

TIP: 在深入这份完整指南之前,建议先阅读 Angular 的 [Essentials](essentials/templates)。

每个 Angular 组件都有一个**模板(template)**,定义该组件渲染到页面上的 [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)。借助模板,Angular 能够在数据变化时自动保持页面最新。

模板通常位于 `*.ts` 文件的 `template` 属性中,或独立的 `*.html` 文件中。了解更多请参阅[组件深度指南](/guide/components)。

## 模板是如何工作的?

模板基于 [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) 语法,并在此基础上提供了额外特性,例如内建模板函数、数据绑定、事件监听、变量等。

Angular 会把模板编译成 JavaScript,从而在内部建立起对应用的完整理解。这样做的好处之一,是 Angular 能自动为你的应用应用内建的渲染优化。

### 与标准 HTML 的差异

模板与标准 HTML 语法的一些差异包括:

- 模板源码中的注释不会出现在渲染输出中
- 组件和指令元素可以自闭合(例如 `<UserProfile />`)
- 带有特定字符(即 `[]`、`()` 等)的属性对 Angular 有特殊含义。更多信息参见[数据绑定文档](guide/templates/binding)和[事件监听文档](guide/templates/event-listeners)。
- `@` 字符对 Angular 有特殊含义,用于为模板添加动态行为,例如[控制流](guide/templates/control-flow)。要表示字面量 `@` 字符,可以用 HTML 实体(`&commat;` 或 `&#64;`)转义。
- Angular 会忽略并折叠不必要的空白字符。详情参见[模板中的空白](guide/templates/whitespace)。
- Angular 可能会向页面添加注释节点作为动态内容的占位符,开发者可以忽略它们。

此外,虽然大多数 HTML 语法都是合法的模板语法,但 Angular 不支持模板中出现 `<script>` 元素。更多信息参见[安全](best-practices/security)页面。

## 接下来?

你可能还对以下内容感兴趣:

| 主题                                                                        | 说明                                                                                     |
| :-------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------- |
| [绑定动态文本、属性和特性](guide/templates/binding)                          | 将动态数据绑定到文本、属性和特性。                                   |
| [添加事件监听](guide/templates/event-listeners)                              | 在模板中响应事件。                                    |
| [双向绑定](guide/templates/two-way-binding)                                  | 同时绑定一个值并传播其变化。                                     |
| [控制流](guide/templates/control-flow)                                       | 条件性地显示、隐藏和重复元素。                                           |
| [管道](guide/templates/pipes)                                                | 以声明式方式转换数据。                                                           |
| [使用 ng-content 插槽化子内容](guide/templates/ng-content)                   | 控制组件如何渲染内容。                                                  |
| [使用 ng-template 创建模板片段](guide/templates/ng-template)                 | 声明一个模板片段。                                                            |
| [使用 ng-container 对元素分组](guide/templates/ng-container)                 | 将多个元素组合在一起,或标记一个渲染位置。                      |
| [模板中的变量](guide/templates/variables)                                    | 了解变量声明。                                                      |
| [使用 @defer 延迟加载](guide/templates/defer)                                | 使用 `@defer` 创建可延迟加载的视图。                                                  |
| [表达式语法](guide/templates/expression-syntax)                              | 了解 Angular 表达式与标准 JavaScript 的异同。 |
| [模板中的空白](guide/templates/whitespace)                                   | 了解 Angular 如何处理空白字符。                                                   |
