> 🌐 本文档由 [angular/angular](https://github.com/angular/angular) 翻译,英文原版见原项目。

<docs-decorative-header title="安装" imgSrc="adev/src/assets/images/what_is_angular.svg"> <!-- markdownlint-disable-line -->
</docs-decorative-header>

通过在线启动器,或在本地终端中,快速上手 Angular。

## 在线体验

如果你只想在浏览器里随便玩玩 Angular、不想搭建项目,可以使用我们的在线沙盒:

<docs-card title="Playground" href="/playground" link="在 Playground 中打开" iconImgSrc="adev/src/assets/icons/playground.svg" titleInline>
体验 Angular 应用的最快方式,无需任何环境配置。
</docs-card>

## 在本地搭建新项目

如果你要开启一个新项目,大概率需要在本地创建项目,以便使用 Git 等工具链。

### 前置条件

- **Node.js** - [v22.22.3 或更新版本](/reference/versions)
- **文本编辑器** - 推荐 [Visual Studio Code](https://code.visualstudio.com/)
- **终端** - 运行 [Angular CLI](/tools/cli) 命令所必需
- **开发工具** - 为了提升开发体验,推荐安装 [Angular Language Service](/tools/language-service)

### 操作步骤

以下指南将带你完成本地 Angular 项目的搭建。

#### 安装 Angular CLI

打开终端(如果使用 [Visual Studio Code](https://code.visualstudio.com/),可以打开[集成终端](https://code.visualstudio.com/docs/editor/integrated-terminal)),运行以下命令:

<docs-code-multifile>
  <docs-code
    header="npm"
    language="shell"
    >
    npm install -g @angular/cli
    </docs-code>
  <docs-code
    header="pnpm"
    language="shell"
    >
    pnpm install -g @angular/cli
    </docs-code>
  <docs-code
    header="yarn"
    language="shell"
    >
    yarn global add @angular/cli
    </docs-code>
  <docs-code
    header="bun"
    language="shell"
    >
    bun install -g @angular/cli
    </docs-code>
</docs-code-multifile>

如果在 Windows 或 Unix 上运行该命令遇到问题,请查阅 [CLI 文档](/tools/cli/setup-local#install-the-angular-cli)了解更多信息。

#### 创建新项目

在终端中,使用 CLI 命令 [`ng new`](cli/new) 并指定项目名。下面的示例使用 `my-first-angular-app` 作为示例项目名。

```shell
ng new <project-name>
```

CLI 会展示一系列项目配置选项。使用方向键和回车键浏览并选择你想要的选项。

如果没有特别偏好,直接按回车采用默认选项继续安装即可。

选择完配置选项、CLI 完成安装后,你会看到如下提示:

```text
✔ Packages installed successfully.
    Successfully initialized git.
```

此时,你的项目已经可以在本地运行了!

#### 在本地运行新项目

在终端中,切换到新建的 Angular 项目目录。

```shell
cd my-first-angular-app
```

此时所有依赖应该都已安装完毕(可以通过检查项目里是否存在 `node_modules` 目录来确认),运行以下命令即可启动项目:

```shell
npm start
```

如果一切顺利,终端中会出现类似下面的确认信息:

```text
Watch mode enabled. Watching for file changes...
NOTE: Raw file sizes do not reflect development server per-request transformations.
  ➜  Local:   http://localhost:4200/
  ➜  press h + enter to show help
```

现在可以访问 `Local` 中显示的地址(例如 `http://localhost:4200`)查看你的应用了。祝编码愉快!🎉

### 使用 AI 辅助开发

想在你喜欢的 AI 加持 IDE 中开始构建,请[查看 Angular 提示词规则与最佳实践](/ai/develop-with-ai)。

## 下一步

Angular 项目已经创建完成,你可以通过 [Essentials 指南](/essentials)进一步了解 Angular,或在我们的深度指南中任选一个主题开始学习!
