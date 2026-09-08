/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

// ============================================================
// 中文注释(angular-chinese 翻译项目):
// 本文件是 Angular 仓库的 Gulp 入口脚本。
// 仓库的构建/维护任务并不直接写在这里,而是按文件拆分到
// `tools/gulp-tasks/` 目录下;本脚本只负责按需加载并注册任务。
// 任务清单说明见 `tools/gulp-tasks/README.md`。
// ============================================================

'use strict';

// 引入 Gulp 构建系统本体。
const gulp = require('gulp');

// 任务加载辅助函数:
// - fileName:tools/gulp-tasks/ 目录下的任务模块文件名;
// - taskName:可选,指定模块内导出的具体任务函数;缺省时使用整个模块(默认导出)。
// 加载后把 gulp 实例传给任务工厂函数,由其完成任务的注册。
// 关于任务加载机制的更多信息,参见 `tools/gulp-tasks/README.md`。
function loadTask(fileName, taskName) {
  const taskModule = require('./tools/gulp-tasks/' + fileName);
  const task = taskName ? taskModule[taskName] : taskModule;
  return task(gulp);
}

// 注册任务:为 zone.js 生成变更日志(CHANGELOG)。
// 用法:pnpm gulp changelog:zonejs
gulp.task('changelog:zonejs', loadTask('changelog-zonejs'));
