> 🌐 本文档由 [angular/angular](https://github.com/angular/angular) 翻译,英文原版见原项目。
> ℹ️ 本文件超过 10000 字符,以下为全部核心内容的中文翻译;组件属性中的链接与图片路径保持原样。

<docs-decorative-header title="什么是 Angular?" imgSrc="adev/src/assets/images/globe.svg" gradientBackground="true">
  Angular 是一个 Web 框架,助力开发者<br/>
  构建快速、可靠、深受用户喜爱的应用。
</docs-decorative-header>

<div style="margin: 2em">
  Angular 由 Google 的一支专职团队维护,提供完善的工具、API 和
  库,帮助你简化并理顺开发工作流。Angular 为你提供坚实的平台,既能构建快速、可靠的应用,又能随团队规模和代码库规模一起扩展。Angular.dev 是 Angular 官方文档的所在地。
</div>

<docs-nav-card title="想先看看代码?" iconImgSrc="adev/src/assets/icons/star.svg">
  <docs-nav-link title="Essentials" iconName="docs" href="essentials" iconImgSrc="adev/src/assets/icons/docs.svg">
    概览使用 Angular 开发是什么体验
  </docs-nav-link>
  <docs-nav-link title="Tutorials" iconName="code"  href="tutorials" iconImgSrc="adev/src/assets/icons/tutorials.svg">
    在浏览器中跟随分步教程操作
  </docs-nav-link>
</docs-nav-card>

<docs-card-container headerTitle="驱动你开发的核心能力" headerImgSrc="adev/src/assets/images/learn-angular-browser-bw.svg">
  <docs-card title="组件" href="essentials/components" link="开始了解组件" iconImgSrc="adev/src/assets/icons/components.svg">
    Angular 组件让你轻松把代码拆分为封装良好的各个部分。
  </docs-card>
  <docs-card title="Angular Signals" href="essentials/signals" link="探索 Angular Signals" titleIconName="sensors" iconImgSrc="adev/src/assets/icons/signals.svg">
    我们的细粒度响应式模型结合编译期优化,简化开发,并让应用默认就跑得更快。
  </docs-card>
  <docs-card title="服务端渲染" href="guide/ssr" link="了解 SSR" iconImgSrc="adev/src/assets/icons/ssr.svg">
    Angular 同时支持服务端渲染(SSR)与静态站点生成(SSG),并提供完整的 DOM 水合(hydration)。
  </docs-card>
  <docs-card title="依赖注入" href="essentials/dependency-injection" link="探索依赖注入" iconImgSrc="adev/src/assets/icons/di.svg">
    在整个应用范围内轻松跨组件共享代码。
  </docs-card>
  <docs-card title="Angular 路由" href="guide/routing" link="探索 Angular 路由" iconImgSrc="adev/src/assets/icons/routing.svg">
    提供功能丰富的导航工具集,包括路由守卫、数据解析、懒加载等支持。
  </docs-card>
  <docs-card title="Angular 表单" href="guide/forms" link="探索表单" iconImgSrc="adev/src/assets/icons/forms.svg">
    为表单交互与校验提供标准化体系。
  </docs-card>
</docs-card-container>

<docs-card-container headerTitle="比以往更快地开发应用" headerImgSrc="adev/src/assets/images/browser-bolt.svg">
  <docs-card title="CLI" href="tools/cli" link="Angular CLI" iconImgSrc="adev/src/assets/icons/cli.svg">
    Angular CLI 让你的项目在一分钟内跑起来,并随附成长为已部署生产应用所需的各种命令。
  </docs-card>
  <docs-card title="DevTools" href="tools/devtools" link="Angular DevTools" iconImgSrc="adev/src/assets/icons/dev-tools.svg">
    Angular DevTools 与浏览器开发者工具并行工作,帮助你调试和分析应用,包括组件树检查器、依赖注入树视图,以及自定义的性能分析火焰图。
  </docs-card>
  <docs-card title="ng update" href="update" link="ng update" iconImgSrc="adev/src/assets/icons/ng-update.svg">
    Angular CLI 的 `ng update` 会运行自动化代码转换,自动处理常规的破坏性变更,大幅简化大版本升级。保持最新版本能让你的应用始终处于最快、最安全的状态。
  </docs-card>
  <docs-card title="Language Service" href="tools/language-service" link="Language Service" iconImgSrc="adev/src/assets/icons/language-service.svg">
    Angular 的 IDE 语言服务在你喜欢的编辑器中提供代码补全、导航、重构和实时诊断能力。
  </docs-card>
</docs-card-container>

<docs-card-container headerTitle="放心交付" headerImgSrc="adev/src/assets/images/rocket.svg">
  <docs-card title="在 Google 庞大的单体仓库中逐提交验证" href="https://cacm.acm.org/research/why-google-stores-billions-of-lines-of-code-in-a-single-repository/" link="了解 Google 的 monorepo" titleIconName="sensors">
    <p>Angular 的每一次提交都会在 Google 内部代码仓库中接受数十万条测试的检验,这些测试覆盖了不计其数的真实场景。</p>
    <p>Angular 承诺为 Google 一些规模最大的产品(包括 Google Cloud)提供稳定性保障。这一承诺确保每次改动都经过充分测试、保持向后兼容,并尽可能附带迁移工具。</p>
  </docs-card>
  <docs-card title="清晰的支持政策与可预期的发布节奏" href="reference/releases" link="版本与发布" titleIconName="sensors">
    Angular 可预期、基于时间的发布节奏,让你的组织对框架的稳定性与向后兼容性充满信心。长期支持(LTS)窗口确保你在需要时获得关键安全修复。官方的更新工具、指南和自动化迁移 schematic,帮助你让应用始终保持对框架与 Web 平台最新进展的跟进。
  </docs-card>
</docs-card-container>

<docs-card-container headerTitle="适用于任何规模" headerImgSrc="adev/src/assets/images/servers.svg">
  <docs-card title="凭借国际化支持触达全球用户" href="guide/i18n" link="国际化" titleIconName="sensors">
    Angular 的国际化功能负责消息翻译与格式化,并支持 Unicode 标准的 ICU 语法。
  </docs-card>
  <docs-card title="默认安全,保护你的用户" href="best-practices/security" link="安全" titleIconName="sensors">
    Angular 与 Google 世界级的安全工程师协作,致力于让开发默认就是安全的。内置的安全特性(包括 HTML 净化和 Trusted Types 支持)帮助你的用户免受跨站脚本、跨站请求伪造等常见漏洞的侵害。
  </docs-card>
  <docs-card title="用 Vite 和 esbuild 让大型团队保持高效" href="tools/cli/build-system-migration" link="Vite 和 esbuild" titleIconName="sensors">
    Angular CLI 内置基于 Vite 和 esbuild 的快速现代构建流水线。据开发者反馈,包含数十万行代码的项目构建时间不到一分钟。
  </docs-card>
  <docs-card title="在 Google 一些最大的 Web 应用中久经考验" titleIconName="sensors">
    众多大型 Google 产品构建在 Angular 架构之上,并推动开发进一步提升 Angular 可扩展性的新特性,从 [Google Fonts](https://fonts.google.com/) 到 [Google Cloud](https://console.cloud.google.com)。
  </docs-card>
</docs-card-container>

<docs-card-container headerTitle="开源优先" headerImgSrc="adev/src/assets/images/open-source.svg">
  <docs-card title="在 GitHub 上公开开发" href="https://github.com/angular/angular" link="为我们的 GitHub 点星" titleIconName="sensors">
    好奇我们在做什么?每个 PR 和提交都能在 GitHub 上看到。遇到问题或 bug?我们会定期分诊 GitHub issue,确保及时响应社区、与社区保持互动,并解决你正在面对的真实问题。
  </docs-card>
  <docs-card title="以透明方式构建" href="roadmap" link="查看我们的公开路线图" titleIconName="sensors">
    团队公开发布当前与未来的工作路线图,并重视你的反馈。我们通过发布征求意见稿(RFC)来收集对大型功能变更的反馈,确保在塑造 Angular 未来方向的过程中倾听社区的声音。
  </docs-card>
</docs-card-container>

<docs-card-container headerTitle="繁荣的社区" headerImgSrc="adev/src/assets/images/community.svg">
  <docs-card title="课程、博客与资源" href="https://devlibrary.withgoogle.com/products/angular?sort=added" link="访问 DevLibrary" titleIconName="sensors">
    我们的社区由才华横溢的开发者、作者、讲师、播客主理人等组成。Google for Developers 图书馆只是海量优质资源的冰山一角,无论新手还是资深开发者都能在这里持续精进。
  </docs-card>
  <docs-card title="开源" href="https://github.com/angular/angular/blob/main/CONTRIBUTING.md" link="参与 Angular 贡献" titleIconName="sensors">
    我们感谢每一位开源贡献者,是你们让 Angular 成为对所有人更好的框架。从修正文档里的一个错别字,到添加大型功能,我们鼓励任何感兴趣的人从我们的 GitHub 开始行动。
  </docs-card>
  <docs-card title="社区合作" href="https://developers.google.com/community/experts/directory?specialization=angular" link="认识 Angular GDE" titleIconName="sensors">
    团队与个人、教育者和企业合作,确保我们持续支持开发者。Angular Google 开发者专家(GDE)是在世界各地用 Angular 进行教学、组织和开发的社区领袖。企业合作则确保 Angular 能很好地满足科技行业领军企业的规模需求。
  </docs-card>
  <docs-card title="与其他 Google 技术携手合作" titleIconName="sensors">
    <p>Angular 与其他 Google 技术和团队紧密合作,共同改进 Web。</p>
    <p>我们与 Chrome Aurora 的长期合作持续探索全网用户体验的改进,开发了 <code>NgOptimizedImage</code> 等内置性能优化,并不断改进 Angular 的 Core Web Vitals 表现。</p>
    <p>我们还在与 <a href="https://firebase.google.com/" target="_blank">Firebase</a>、<a href="https://www.tensorflow.org/" target="_blank">TensorFlow</a>、<a href="https://flutter.dev/" target="_blank">Flutter</a>、<a href="https://m3.material.io/" target="_blank">Material Design</a> 和 <a href="https://cloud.google.com/" target="_blank">Google Cloud</a> 合作,确保在整个开发者工作流中提供有意义的集成。</p>
  </docs-card>
</docs-card-container>

<docs-callout title="加入这股浪潮!">
  <docs-pill-row>
    <docs-pill href="roadmap" title="阅读 Angular 路线图"/>
    <docs-pill href="playground" title="试试我们的 Playground"/>
    <docs-pill href="tutorials" title="跟随教程学习"/>
    <docs-pill href="https://youtube.com/playlist?list=PL1w1q3fL4pmj9k1FrJ3Pe91EPub2_h4jF" title="观看我们的 YouTube 课程"/>
    <docs-pill href="api" title="查阅 API 参考"/>
  </docs-pill-row>
</docs-callout>
