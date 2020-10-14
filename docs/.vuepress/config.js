module.exports= {
    title: 'vue-observe-visibility',
    description: "检测元素在页面上变得可见或隐藏的时机",
    base: "/vue-observe-visibility-docs-cn/",
    markdown: {
        lineNumbers: true,
        anchor: {
            permalink: false
        }
    },
    themeConfig: {
        activeHeaderLinks: true,
        displayAllHeaders: true,
        logo: "/images/logo.png",
        nav: [
            {
                text: "大笑文档",
                link: "http://www.febeacon.com"
            },
            {
                text: "文档首页",
                link: "/"
            }
        ],
        sidebar: [
            {
                title: '安装',
                path: '/routes/',
                sidebarDepth: 2
            },
            {
                title: '使用',
                path: '/routes/usage',
                sidebarDepth: 2
            },
            {
                title: '示例',
                path: '/routes/example',
                sidebarDepth: 2
            }
        ]
    },
    head: [
        ["link", {
            rel: "icon", href: "/images/favicon.ico"
        }]
    ]
}