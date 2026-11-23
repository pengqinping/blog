# JS·TS 深入系列 · 博客成品包

13 篇 JavaScript / TypeScript 源码学习博客（进阶源码向 + 面试向），每篇含封面与正文图示，已按微信公众号发布规范制作。

## 目录结构

```text
js-ts-blog/
├── 00-导读-知识地图与学习方法.md      # 全系列导航 + 四层知识地图
├── 01-执行上下文与调用栈.md           # 提升与 TDZ / 调用栈
├── 02-事件循环与宏微任务.md           # 浏览器 + Node libuv 双视角
├── 03-闭包的底层实现与内存模型.md     # [[Environment]] / GC / 泄漏判定
├── 04-原型链与继承.md                 # 手写 new/instanceof / class 编译产物
├── 05-this绑定与手写call-apply-bind.md
├── 06-手写Promise源码.md              # Promises/A+ 逐行实现
├── 07-async-await与生成器原理.md      # generator / co / _asyncToGenerator
├── 08-手写高频工具函数.md             # 防抖节流/深拷贝/柯里化/compose/EventEmitter
├── 09-TS类型系统与工具类型源码.md     # 收窄 / 条件类型 / lib.es5.d.ts 源码
├── 10-类型体操方法论.md               # 递归 / 元组 / infer / 模板字面量
├── 11-TS编译器架构.md                 # tsc 五阶段 / tsconfig 精要
├── 12-面试题精编与知识收束.md         # 35 道高频题 + 三轮复习法
├── images/                            # 29 张 PNG（封面×13 + 正文图×16）
└── diagrams/                          # 图示 HTML 源稿（可改后重截）
```

- 每篇 md 均带公众号 frontmatter（标题/摘要/封面/theme: tech），已通过 `wx.mjs preflight` 全量自检。
- **发布前唯一待办**：把 frontmatter 里的封面确认一遍，并在公众号后台确认作者署名（frontmatter 未写 author，发布时可手动填，或给每篇加一行 `author: 你的名字`，≤16 字）。
- 图片为相对路径引用，**md 与 images/ 必须保持同级目录移动**。

## 一、微信公众号（wechat-publish skill）

```bash
# 0) 首次：配置凭证（.env 填 APP_ID/APP_SECRET，服务器 IP 加后台白名单）
cp ~/.agents/skills/wechat-publish/.env.example ~/.config/wechat-publish/.env
node ~/.agents/skills/wechat-publish/scripts/wx.mjs doctor

# 1) 目检渲染效果（不联网）
node ~/.agents/skills/wechat-publish/scripts/wx.mjs publish 01-执行上下文与调用栈.md --dry-run

# 2) 写入草稿箱（自动压缩上传图片；不点发布）
node ~/.agents/skills/wechat-publish/scripts/wx.mjs publish 01-执行上下文与调用栈.md --theme tech

# 3) 浏览器收尾：扫码 → 打开草稿 → 人工确认原创/合集/定时
node ~/.agents/skills/wechat-publish/scripts/finish.mjs --title "执行上下文"
```

红线：脚本只写草稿箱，最终发表必须由人确认。建议节奏：每周 1-2 篇连载，首篇发 00 导读做目录页。

## 二、小红书（图文笔记）

1. **卡片**：`images/` 里的正文图可直接当卡片用（1080px 宽）；首图用对应封面图（深蓝渐变 + 大标题，辨识度高）。单篇建议 3-6 张：封面 → 知识地图/核心图 → 要点卡片。
2. **文案**：取每篇「开场代码题 + 一句话答案」做钩子，正文放「小结」4 条 + 2-3 道面试题，末尾引导「完整版在公众号」。
3. **标题模板**：「面试官问我 XX，我把 V8 源码翻了个底朝天」「手写 Promise 前，先搞懂这三条规则」。
4. 需要 3:4 竖版卡片时，改 `diagrams/*.html` 中 `.diagram` 的宽高（如 900×1200）重截即可。

## 三、抖音（口播短视频）

1. **脚本**：每篇「开场代码题 → 翻车 → 原理一句话 → 正确答案」天然是 45-60 秒口播结构；「面试高频」表直接拆条。
2. **画面**：diagrams 的 HTML 用浏览器全屏演示，配合打字机效果逐步出现；代码块做逐行高亮。
3. **系列化**：统一封面角标（第 N 篇）+ 固定开场句（「这道题的正确率不到 20%」）。

## 四、修改与重制图示

- 图示源稿在 `diagrams/NN.html`（无外部依赖，浏览器直接打开）。
- 修改后重截：起本地服务 `python3 -m http.server 8477`，浏览器打开对应页，对 `figure[data-id="xxx"]` 元素截图，覆盖 `images/` 同名文件。
- 图示统一规范：宽 1080px，白底卡片，蓝色 #1d4ed8 主色 + 琥珀 #fbbf24 强调，页脚带系列编号。

## 五、内容基线

- 语法基线 ECMAScript 2023；Node 20 LTS；TypeScript 5.x。
- 引擎/编译器源码均为「概念级简化示意」，已在文中标注；建议追更时对齐读者当前稳定版本。
- 全系列统一结构：原理 → 源码 → 手写 → 面试高频 → 小结。
