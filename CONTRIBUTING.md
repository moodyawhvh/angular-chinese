> 🌐 本文档由 [angular/angular](https://github.com/angular/angular) 翻译,英文原版见原项目。

# 参与 Angular 贡献

我们真诚欢迎你为 Angular 做贡献,帮助它变得比今天更好!
作为贡献者,请遵循以下指南:

- [行为准则](#coc)
- [有问题或疑问?](#question)
- [Issue 与 Bug](#issue)
- [功能请求](#feature)
- [提交规范](#submit)
- [编码规则](#rules)
- [提交信息规范](#commit)
- [签署 CLA](#cla)

## <a name="coc"></a> 行为准则

请帮助我们一起保持 Angular 开放与包容。
请阅读并遵守我们的[行为准则][coc]。

## <a name="question"></a> 有问题或疑问?

请不要为一般性支持类问题开设 issue,我们希望把 GitHub issue 留给 bug 报告和功能请求。
我们建议你前往 [Stack Overflow](https://stackoverflow.com/questions/tagged/angular) 提出支持类问题。在 Stack Overflow 上创建新问题时,请务必添加 `angular` 标签。

Stack Overflow 是更合适的提问场所,原因如下:

- Stack Overflow 上有数以千计乐于帮忙的人
- 问答内容会长期公开保留,你的提问或回答可能帮到其他人
- Stack Overflow 的投票机制能保证最佳答案获得显著曝光

为了节省你和我们双方的时间,我们会系统性关闭所有一般性支持类 issue,并引导大家转向 Stack Overflow。

如果你想就问题进行实时交流,可以通过 [Angular 社区 Discord 服务器][discord] 联系我们。

## <a name="issue"></a> 发现了 Bug?

如果你在源码中发现 bug,可以向我们[提交 issue](#submit-issue) 至 [GitHub 仓库][github]。
更好的做法是,[提交一个 Pull Request](#submit-pr) 连同修复一起交付。

## <a name="feature"></a> 缺少某个功能?

你可以通过向我们的 GitHub 仓库[提交 issue](#submit-issue) 来_请求_新功能。
如果你想_实现_某个新功能,请先评估改动规模,以决定采取哪种流程:

- 对于**重大功能(Major Feature)**,请先开一个 issue 阐述你的提案,供大家讨论。
  这个流程能让我们更好地协调精力、避免重复劳动,并帮助你打磨改动方案,使其更顺利地被项目接受。

  **注意**:为文档新增一个主题,或对某个主题进行大规模重写,同样算作重大功能。

- **小功能(Small Features)**可以直接实现并[以 Pull Request 形式提交](#submit-pr)。

## <a name="submit"></a> 提交规范

### <a name="submit-issue"></a> 提交 Issue

提交 issue 之前,请先搜索 issue 跟踪列表。你遇到的问题可能已经有人提过,相关讨论或许能直接提供现成的解决办法。

我们希望尽快修复所有问题,但在修复 bug 之前,我们必须先复现并确认它。
为了复现 bug,我们要求你提供一个最小化复现(minimal reproduction)。
一份最小可复现场景能一次性提供大量关键信息,免去我们反复追问的来回成本。

最小化复现让我们能够快速确认 bug(或指出代码问题),同时确认我们修的确实是正确的问题。

要求最小化复现是为了节省维护者的时间,最终让更多 bug 得到修复。
很多开发者在准备最小化复现的过程中,自己就发现了问题所在。
我们理解,有时候很难从一个庞大的代码库中剥离出关键代码,但我们必须先隔离问题,才能修复它。

遗憾的是,没有最小化复现我们无法调查/修复 bug。如果我们没有收到你的回复,信息不足以复现的 issue 将被关闭。

你可以从我们的[新 issue 模板](https://github.com/angular/angular/issues/new/choose)中选择合适的模板并填写内容,来创建新 issue。

### <a name="pr-quality"></a> 贡献质量

我们高度重视开源贡献以及来自社区的 Pull Request。请注意,每一个 Pull Request 都由团队中真实的人进行评审和合并,这需要花费时间和精力,而这些时间精力本可以投入其他有价值的工作。因此,我们对社区贡献的 Pull Request 设有如下最低要求:

1. 在 [GitHub](https://github.com/angular/angular/pulls) 上搜索与你的提交相关的开放或已关闭 PR。
   - 避免与已有工作重复。
2. 确保某个 issue 或 pull request 清楚描述了你要修复的问题,或者记录了你想要添加的功能设计。issue 必须附带_最小化_复现。

3. 提前在 issue 中讨论设计,有助于确保我们已准备好接受你的工作。Pull Request 不是做设计论证的合适场合。
   - 拿不准时,先开 issue 讨论,再做任何投机性的实现工作。

4. 理想情况下 PR 应关联一个 issue,但这不是硬性要求。

5. 改动应当能提升代码质量(例如处理某个 TODO),或对某个功能产生影响/改进。

6. 微优化只有在有真实基准测试(benchmark)验证的情况下才会被接受。

7. 不要针对未被标记为 "help wanted" 的功能请求开设 Pull Request,因为这类功能通常还需要额外的设计工作,我们暂时无法接受相关 PR。

8. 改动应当有完善的测试覆盖。

如果你的 Pull Request 不满足这些最低要求,我们可能会关闭你的 PR。另外,如果你的 PR 引入了破坏性变更(breaking change),该变更带来的动荡程度可能让我们无法继续推进,这种情况下我们也可能关闭你的 PR。除此之外,我们非常期待看到你对 Angular 的贡献与热情!

### <a name="submit-pr"></a> 提交 Pull Request(PR)

提交 Pull Request(PR)之前,请先了解以下指南:

1. 发送 PR 之前,请先签署我们的[贡献者许可协议(CLA)](#cla)。
   没有签署 CLA,我们无法接受任何代码。
   请确保所有贡献的 Git 提交都使用与你 CLA 签名关联的邮箱地址撰写。

2. [Fork](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) [angular/angular](https://github.com/angular/angular/fork) 仓库。

3. 在你 fork 的仓库中,于新的 git 分支上进行改动:

   ```shell
   git checkout -b my-fix-branch main
   ```

4. 制作你的补丁,**并附上相应的测试用例**。

5. 遵守我们的[编码规则](#rules)。

6. 按照[开发者文档][dev-doc]中的说明运行完整的 Angular 测试套件,确保所有测试通过。

7. 使用符合我们[提交信息规范][commit-message-guidelines]的描述性提交信息来提交改动。
   遵守这些规范是必须的,因为发布说明是根据这些提交信息自动生成的。

   ```shell
   git commit --all
   ```

   注意:可选的 `--all` 命令行参数会自动 "add" 和 "rm" 被修改的文件。

8. 把分支推送到 GitHub:

   ```shell
   git push origin my-fix-branch
   ```

9. 在 GitHub 上向 `angular:main` 发起 pull request。

### Pull Request 评审

Angular 团队保留不接受社区贡献者 Pull Request 的权利,前提是该成员此前在社区中有不当行为,包括不遵守 [Angular 行为准则](https://github.com/angular/code-of-conduct),无论该行为发生在 Angular 官方渠道之内还是之外。

#### 处理评审意见

如果我们通过代码评审要求你修改,那么:

1. 对代码进行所需的更新。

2. 重新运行 Angular 测试套件,确保测试仍然通过。

3. 创建一个 fixup 提交并推送到你的 GitHub 仓库(这会自动更新你的 Pull Request):

   ```shell
   git commit --all --fixup HEAD
   git push
   ```

   关于 fixup 提交的更多信息参见[这里](./contributing-docs/using-fixup-commits.md)。

完成!感谢你的贡献!

##### 更新提交信息

评审者常常会建议修改提交信息(例如为改动补充上下文,或遵守我们的[提交信息规范][commit-message-guidelines])。
要更新分支上最后一个提交的信息:

1. 检出你的分支:

   ```shell
   git checkout my-fix-branch
   ```

2. 修订(amend)最后一个提交并修改提交信息:

   ```shell
   git commit --amend
   ```

3. 推送到你的 GitHub 仓库:

   ```shell
   git push --force-with-lease
   ```

> 注意:<br />
> 如果你需要更新更早提交的信息,可以以交互模式使用 `git rebase`。
> 详情参见 [git 文档](https://git-scm.com/docs/git-rebase#_interactive_mode)。

#### 你的 Pull Request 被合并之后

你的 pull request 被合并后,可以安全地删除你的分支,并从主(上游)仓库拉取变更:

- 通过 GitHub 网页界面或本地 shell 删除 GitHub 上的远端分支:

  ```shell
  git push origin --delete my-fix-branch
  ```

- 检出 main 分支:

  ```shell
  git checkout main -f
  ```

- 删除本地分支:

  ```shell
  git branch -D my-fix-branch
  ```

- 用最新的上游版本更新本地 `main` 分支:

  ```shell
  git pull --ff upstream main
  ```

## <a name="rules"></a> 编码规则

为了保证整个源码库的一致性,开发时请牢记以下规则:

- 所有新功能或 bug 修复**必须由一个或多个 spec(单元测试)覆盖**。
- 所有公开 API 方法**必须编写文档**。
- 我们遵循 [Google 的 TypeScript 风格指南][ts-style-guide],但所有代码在 **100 字符**处换行。

  项目提供了自动化格式化工具,参见 [building-and-testing-angular.md](./contributing-docs/building-and-testing-angular.md#formatting-your-source-code)。

## <a name="commit"></a> 提交信息规范

我们对 Git 提交信息的格式有非常严格的规定:

```
<type>(<scope>): <short summary>
```

详情参见[提交信息规范][commit-message-guidelines]。

## <a name="cla"></a> 签署 CLA

发送 pull request 之前,请先签署我们的贡献者许可协议(CLA)。任何代码改动若要被接受,都必须签署 CLA。过程很快,我们保证!

- 个人贡献者请使用[简单的点击确认表单][individual-cla]。
- 企业贡献者需要[打印、签署表格,然后通过扫描+邮件、传真或邮寄方式提交][corporate-cla]。

如果你拥有多个 GitHub 账号,或单个 GitHub 账号关联了多个邮箱地址,则必须使用用于撰写 Git 提交和发送 pull request 的那个 GitHub 账号的 主邮箱地址 来签署 CLA。

以下资料可以帮助你排查 GitHub 账号与多个邮箱地址相关的问题:

- https://help.github.com/articles/setting-your-commit-email-address-in-git/
- https://stackoverflow.com/questions/37245303/what-does-usera-committed-with-userb-13-days-ago-on-github-mean
- https://help.github.com/articles/about-commit-email-addresses/
- https://help.github.com/articles/blocking-command-line-pushes-that-expose-your-personal-email-address/

[coc]: https://github.com/angular/code-of-conduct/blob/main/CODE_OF_CONDUCT.md
[corporate-cla]: https://cla.developers.google.com/about/google-corporate
[dev-doc]: ./contributing-docs/building-and-testing-angular.md
[commit-message-guidelines]: ./contributing-docs/commit-message-guidelines.md
[github]: https://github.com/angular/angular
[discord]: https://discord.gg/angular
[individual-cla]: https://cla.developers.google.com/about/google-individual
[ts-style-guide]: https://google.github.io/styleguide/tsguide.html
