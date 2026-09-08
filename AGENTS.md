> 🌐 本文档由 [angular/angular](https://github.com/angular/angular) 翻译,英文原版见原项目。

---
trigger: always_on
---

这里是 Angular 框架的源代码。本指南为在此仓库中工作的 AI 代理列出标准实践。

## 环境

- 使用 `pnpm` 进行包管理。
- 使用 `pnpm bazel test //target` 运行测试。

## 关键文档

- [构建与测试](contributing-docs/building-and-testing-angular.md):运行各类构建目标的权威指南。
- [编码规范](contributing-docs/coding-standards.md):TypeScript 及其他文件的风格指南。
- [提交规范](contributing-docs/commit-message-guidelines.md):提交信息与 PR 标题的格式要求。

## 测试

- **无 Zone、异步优先:** 默认假设运行在 zoneless 环境中,状态变更会以异步方式调度更新。
  - **不要**使用 `fixture.detectChanges()` 手动触发更新。
  - **务必**遵循 "Act, Wait, Assert"(操作、等待、断言)模式:
    1. **操作(Act):** 更新状态或执行动作。
    2. **等待(Wait):** `await fixture.whenStable()`,让框架处理已调度的更新。
    3. **断言(Assert):** 校验输出。
- 为了保持测试速度,尽量减少等待:
  - 使用 `useAutoTick()`(来自 `packages/private/testing/src/utils.ts`),通过模拟时钟快进时间。
- 确实需要等待时,使用真实异步测试(`it('...', async () => { ... })`),并配合:
  - `await timeout(ms)`(来自 `packages/private/testing/src/utils.ts`)等待指定毫秒数。
  - `await fixture.whenStable()` 等待框架进入稳定状态。

## Pull Request

- 使用 `gh` CLI(GitHub CLI)创建和管理 pull request。
