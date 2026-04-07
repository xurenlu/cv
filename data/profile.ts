const profile = {
    en:
        {
            profile:{
                wantedJobTitle:"AI Consultant · Agent & AI Architecture",
                firstName:"renlu",
                lastName:"",
                email:"xurenlu@gmail.com",
                phone:"18006787690",
                country:"China",
                city:"Hangzhou",
                avatar:"",
                dateOfBirth:"Aug,1983"
            },
            professionalSummary:`Career focus: AI consulting, agent design, and AI/LLM architecture—helping organizations turn models into reliable products. Open to roles such as AI advisor, agent designer, or head of AI platform/architecture.

17+ years in engineering and leadership (large-scale systems, compliance, mobile and web). Recent work centers on custom agents, prompt and evaluation pipelines, speech/vision LLM integrations, and end-to-end AI solutions in education and enterprise.

Calm communicator, strong listener, able to go deep for long stretches. Core stack: Go, TypeScript, Python, and mainstream LLM APIs; hands-on with Marstaff and other agent-oriented projects.`,
            skills:[
                {
                    skill:"LLM & agent systems",
                    score:5
                },{
                    skill:"AI architecture & consulting",
                    score:5
                },
                {
                    skill:"Prompting & model evaluation",
                    score:5
                }
            ],
            projects:[
                {
                    subject:"DongShouXue (动手学)",
                    desc:"Shipped iOS app for East Asian language learning — interactive practice and structured lessons (App Store).",
                    link:"https://apps.apple.com/cn/search?term=%E5%8A%A8%E6%89%8B%E5%AD%A6"
                },
                {
                    subject:"MiaoMo (妙墨)",
                    desc:"Shipped Markdown editor for macOS — local-first writing workflow (Mac App Store).",
                    link:"https://apps.apple.com/cn/search?term=%E5%A6%99%E5%A2%A8"
                },
                {
                    subject:"fogBoard",
                    desc:"Shipped whiteboard app — infinite canvas for sketching, meetings, and teaching.",
                    link:"https://apps.apple.com/cn/search?term=fogBoard"
                },
                {
                    subject:"Chrome extensions (torows)",
                    desc:"Published Chrome extensions (Chrome Web Store, torows): Table to Excel, Batch Downloader, Cinema Mode, One-Click Video Downloader, E-ink Display, Adolescent Protection, Smart Hide, and more.",
                    link:"https://chromewebstore.google.com/search/torows"
                },
                {
                    subject:"marstaff",
                    desc:"Go-based extensible AI agent platform: multi-provider LLMs, tools & SKILL.md skills, MCP, WebSocket streaming, Telegram/Matrix bots, and AFK background tasks (cron, monitoring, notifications).",
                    link:"https://github.com/xurenlu/marstaff"
                },
                {
                    subject:"houyi",
                    desc:"WeCom (WeChat Work) session archive backend: Spring Boot 3 + Java 21, pulls and stores chat/media with OSS, MySQL, Redis, and RocketMQ; observability via Prometheus.",
                    link:"https://github.com/xurenlu/houyi"
                },
                {
                    subject:"sslcat",
                    desc:"Go reverse proxy / edge server that provisions and renews HTTPS certificates automatically (Let’s Encrypt). Homepage: sslcat.com",
                    link:"https://github.com/xurenlu/sslcat"
                },
                {
                    subject:"fastv",
                    desc:"macOS Swift/SwiftUI app “妙打”: local voice-to-text input (SenseVoice + ONNX), optional IMAP mail client, and an HTTP/WebSocket STT API for integrations.",
                    link:"https://github.com/xurenlu/fastv"
                },
                {
                    subject:"cdnproxy",
                    desc:"Go proxy for public CDN assets and AI APIs in restricted networks: path-based CDN forwarding, disk cache, streaming, WebSocket/SSE, and admin whitelist.",
                    link:"https://github.com/xurenlu/cdnproxy"
                }
            ],
            education:[
                {
                    school:"Huazhong University of Science and Technology",
                    degree:"Bachelors",
                    startDate:"Sep,2001",
                    endDate:"June,2005",
                    city:"Wuhan",
                    description:""
                }
            ],
            /* 工作经历：越新越靠前 */
            employmentHistory:[
                {
                    jobTitle:"Partner",
                    employer:"Hangzhou Ruoran Technology",
                    startDate:"Feb,2025",
                    endDate:"Present",
                    city:"Hangzhou",
                    description:`AI consulting. For Hangzhou Feifan School (Fuyang) AI learning device: custom agents and system architecture; AI homework grading and tutoring; ~1,500 students in phase one with manual review ~5%. Iterated prompts per subject/lesson and benchmarked Google, Doubao, Qwen and other models; improved speech-to-text with multiple AI pipelines. Built an AI SCRM: sales script supervision, intelligent daily reports, workload tracking, sentiment and public-opinion monitoring.`
                },
                {
                    jobTitle:"Technical Lead",
                    employer:"Huasheng Finance",
                    startDate:"2020",
                    endDate:"2024",
                    city:"Hangzhou",
                    description:`Technical lead for a team of ~70. Led compliance and risk-control platforms. Evolved from early MongoDB-centric personal WeChat compliance to enterprise WeChat–wide coverage; Elasticsearch plus a rules engine; triggers expanded from brittle keyword-only flows to QR codes, external links, payment codes, and ML-based detection. Media ingestion and security audit at roughly 30 million chat messages per day. Integrated AI into compliance and monitoring in recent years.`
                },
                {
                    jobTitle:"CTO",
                    employer:"some-site.cn",
                    startDate:"July,2016",
                    endDate:"Dec,2017",
                    city:"Beijing",
                    description:`glz.cn is a website that provides home renovation services. I was mainly responsible for the recruitment and performance evaluation of the technical R&D team in the early stage. In the later stage, I also lead the content operation and advertising team.
            `
                },
                {
                    jobTitle:"R&D expert",
                    employer:"Alibaba Group",
                    startDate:"Apr,2013",
                    endDate:"June,2016",
                    city:"Hangzhou",
                    description:`PM for the Taobao main search PHP squad (~10 people): release planning and delivery for s.tao.com–related changes; partnered with the algorithm team on engineering-side bucket testing and experiments.`

                },
                {
                    jobTitle:"R&D",
                    employer:"Yahoo! China",
                    startDate:"Aug,2007",
                    endDate:"Jul,2011",
                    city:"Beijing",
                    description:"Responsible for the backend development of ks.cn.yahoo.com and yahoo music in the category of "
                },
            ]
        },
    zh:{
        profile:{
            wantedJobTitle:"AI 咨询顾问 · Agent / AI 架构",
            firstName:"黄小滚",
            lastName:"",
            email:"xurenlu@gmail.com",
            phone:"18006787690",
            country:"中国",
            city:"杭州",
            avatar:"",
            dateOfBirth:"Aug,1983"
        },
        professionalSummary:`求职方向全面转向 AI：希望担任 AI 咨询顾问、智能体（Agent）设计师或企业 AI / Agent 方向架构师，也可承接技术咨询与方案落地并重的角色。

十余年研发与架构经验打底（大规模系统、合规与风控、移动端与 Web）。近年聚焦大模型应用、自研 Agent 平台、提示词与多模型评测、语音与教学场景落地；既能做路线规划与对外沟通，也能带队工程交付。技术栈以 Go / TypeScript / Python 及常见 LLM 接入为主，情绪稳定、善于倾听、可长期专注攻坚。
    `,
        skills:[
            {
                skill:"大模型与 Agent 工程",
                score:5
            },{
                skill:"AI 架构与咨询交付",
                score:5
            },
            {
                skill:"提示词与多模型评测",
                score:5
            }
        ],
        education:[
            {
                school:"华中科技大学",
                degree:"学士学位（统招本科)",
                startDate:"Sep,2001",
                endDate:"June,2005",
                city:"武汉",
                description:"在校期间，同时获得了材料科学、计算机科学两个专业的学位。"
            }
        ],
        /* 工作经历：越新越靠前 */
        employmentHistory:[
            {
                jobTitle:"合伙人",
                employer:"杭州若然科技",
                startDate:"2025年2月",
                endDate:"至今",
                city:"杭州",
                description:`对外提供 AI 咨询。面向杭州非凡学校（富阳）AI 学练机：自研智能体与整体架构，落地 AI 作业批改与讲解；一期约 1500 名学生使用，人工审核参与率约 5%。针对各学科/课型持续打磨提示词，并横向评测 Google、豆包、通义等模型；语音转写链路采用多路 AI 方案提升准确率。另搭建 AI SCRM：销售话术监督、智能日报、工作量监督、情绪与舆情监控。`
            },
            {
                jobTitle:"技术负责人",
                employer:"花生财经",
                startDate:"2020年",
                endDate:"2024年",
                city:"杭州",
                description:`任技术负责人，团队约 70 人。主导合规与风控相关系统。从早期 MongoDB 为主的个人微信合规，演进为全面企业微信场景；检索与审计结合 Elasticsearch、规则引擎，触发方式从关键词扩展到二维码、外链、收款码及机器学习触发等。支撑媒体消息等高吞吐场景，日均约 3000 万条聊天消息入库与安全审计。近年将 AI 能力持续融入合规与业务风控。`
            },
            {
                jobTitle:"研发专家",
                employer:"Alibaba Group",
                startDate:"Apr,2013",
                endDate:"June,2016",
                city:"杭州",
                description:`任淘宝主搜索方向 PHP 小组 PM，团队约 10 人：负责 s.tao.com 相关日常上线排期与交付；协同算法团队落地工程侧 bucket test 与实验。`

            },
            {
                jobTitle:"创始人",
                employer:"-",
                startDate:"Sep,2011",
                endDate:"Apr,2013",
                city:"北京",
                description:`离开雅虎织织了一个小的团队来为淘宝平台提供订单同步类工具。。。`
            },
            {
                jobTitle:"PHP工程师",
                employer:"雅虎中国",
                startDate:"Aug,2007",
                endDate:"Jul,2011",
                city:"北京",
                description:"前期主要负责雅虎知识堂的服务端开发"
            }
        ],
        projects:[
            {
                subject:"动手学",
                desc:"已上架 iOS 应用：东亚语言学习，含互动练习与结构化课程（App Store）。",
                link:"https://apps.apple.com/cn/search?term=%E5%8A%A8%E6%89%8B%E5%AD%A6"
            },
            {
                subject:"妙墨",
                desc:"已上架 macOS 端 Markdown 编辑器，本地优先的写作体验（Mac App Store）。",
                link:"https://apps.apple.com/cn/search?term=%E5%A6%99%E5%A2%A8"
            },
            {
                subject:"fogBoard",
                desc:"已上架白板应用：无限画布，适用于手绘、会议记录与教学演示。",
                link:"https://apps.apple.com/cn/search?term=fogBoard"
            },
            {
                subject:"Chrome 扩展（torows）",
                desc:"已上架 Chrome 网上应用店扩展（torows）：表格转 Excel、批量下载、影院模式、一键视频下载、类墨水屏阅读、青少年防护、智能隐藏等，详见商店搜索页。",
                link:"https://chromewebstore.google.com/search/torows"
            },
            {
                subject:"marstaff",
                desc:"Go 实现的 AI Agent 平台：多厂商模型、工具与 SKILL 技能、MCP、WebSocket 流式输出、Telegram/Matrix 接入、离场 AFK 定时与监控任务等。",
                link:"https://github.com/xurenlu/marstaff"
            },
            {
                subject:"houyi",
                desc:"企业微信会话存档系统（后羿）：Spring Boot 3 + Java 21，拉取并存储会话与媒体；阿里云 OSS、MySQL、Redis、RocketMQ，配套监控与文档。",
                link:"https://github.com/xurenlu/houyi"
            },
            {
                subject:"sslcat",
                desc:"支持自动 HTTPS 证书申请与续期的 Go 反向代理 / 边缘网关，站点 sslcat.com。",
                link:"https://github.com/xurenlu/sslcat"
            },
            {
                subject:"fastv（妙打）",
                desc:"macOS 智能语音输入法：本地语音转写（SenseVoice/ONNX）、可选 IMAP 邮箱，并提供 HTTP/WebSocket STT API 供外部集成。",
                link:"https://github.com/xurenlu/fastv"
            },
            {
                subject:"cdnproxy",
                desc:"在受限网络中代理公共 CDN 与 AI API 的 Go 服务：路径转发、磁盘缓存、大文件与 Range、WebSocket/SSE 流式、管理白名单等。",
                link:"https://github.com/xurenlu/cdnproxy"
            }
        ]

    }
}

export default profile
