# 术语表

## Web

Web 开发涵盖了许多专业术语。本篇旨在收集并解释这些术语，方便行内人员及新手查询使用。

### SPA (单页应用)

**单页应用（Single-Page Application, SPA）** 是一种Web应用程序的架构模型。在SPA中，页面跳转通过JavaScript动态地重写当前页面而非从服务器加载整个新页面实现，从而提高用户体验。

- 优势: 提升响应速度，用户体验更流畅，页面切换类似桌面应用程序。
- 缺点: 初始加载较慢，首次加载全部资源可能导致白屏问题；单页结构也可能对搜索引擎优化（SEO）不利。

### SSR (服务端渲染)

**服务端渲染（Server-Side Rendering, SSR）** 指的是Web页面的HTML直接由服务器生成，然后发送到客户端的技术。这种方法可以提升首屏加载速度，并对搜索引擎优化更为友好。

- 优势: 改善首屏加载时间，提升SEO表现。
- 缺点: 服务器负载增加，可能影响后端性能。

### DevOps（开发运维一体化）

DevOps是一种文化和实践，旨在加速开发与运维团队之间的协作，通过自动化软件交付过程来提高效率。

- **核心实践**: 持续集成 (CI)、持续交付 (CD)。
- **工具示例**: Jenkins, Docker, Kubernetes 用于自动化测试、部署和管理应用程序的容器化。

### RWD (响应式设计)

响应式网站设计 (RWD) 是一种网页设计方法论，目的是根据用户的设备（桌面、平板、手机）来提供适合阅读和导航的视图。

- **技术实现**: 媒体查询, 弹性布局。
- **工具框架**: Bootstrap, Foundation。

### Serverless (无服务器架构)

无服务器架构是一种执行代码的方式，开发者无需明确管理服务器，只需编写业务逻辑代码。

- **优点**: 减少管理服务器的需求，自动扩展和缩放。
- **平台示例**: AWS Lambda, Google Cloud Functions, Azure Functions。

### PWA (Progressive Web Apps)

PWA 是一种创建类似原生应用体验的Web应用的方法。它允许用户在离线时使用，并可以安装到用户的主屏幕上。

- **关键技术**: Service Workers, Manifest文件, 离线存储。
- **优势**: 提升性能，增强用户体验，离线工作能力。

---

## 商业技术术语表

常见简写一览：

| name       | description                                                     |
| ---------- | --------------------------------------------------------------- |
| toB        | 面向企业的产品 (To Business)                                    |
| toC        | 面向消费者的产品 (To Customer)                                  |
| OA         | 办公自动化 (Office Automation)                                  |
| ERP        | 企业资源计划 (Enterprise Resource Planning)                     |
| CRM        | 客户关系管理 (Customer Relationship Management)                 |
| CMS        | 内容管理系统 (Content Management System)                        |
| SaaS       | 软件即服务 (Software as a Service) - 通过互联网提供软件应用     |
| PaaS       | 平台即服务 (Platform as a Service) - 提供互联网开发平台         |
| IaaS       | 基础设施即服务 (Infrastructure as a Service) - 提供虚拟计算资源 |
| BI         | 商业智能 (Business Intelligence) - 分析数据支持决策             |
| IoT        | 物联网 (Internet of Things) - 连接设备的网络收集交换数据        |
| AI         | 人工智能 (Artificial Intelligence) - 通过机器模拟智能行为       |
| RPA        | 机器人流程自动化 (Robotic Process Automation) - 自动执行任务    |
| B2B        | 企业对企业 (Business to Business) - 企业间的商务交易            |
| B2C        | 企业对消费者 (Business to Customer) - 企业与消费者的交易        |
| e-commerce | 电子商务 (Electronic Commerce) - 互联网上的商业交易             |

## 软件测试

| name        | description                                                         |
| ----------- | ------------------------------------------------------------------- |
| ST          | 软件测试 (Software Testing)                                         |
| LP          | 生存验证测试 (Live Proving Test)，在生产环境中使用真实数据进行测试  |
| SIT         | 系统集成测试 (System Integration Testing)                           |
| UAT         | 用户验收测试 (User Acceptance Testing)                              |
| Unit        | 单元测试 (Unit Testing) - 测试单一组件或代码块                      |
| Integration | 集成测试 (Integration Testing) - 测试多个组件或系统的组合           |
| Performance | 性能测试 (Performance Testing) - 测试软件应用的响应速度和资源消耗等 |
| Security    | 安全测试 (Security Testing) - 检查软件的安全漏洞                    |
