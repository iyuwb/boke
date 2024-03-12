module.exports = {
    title: '耶温博客',
    description: '耶温前端学习笔记',
    head: [
        ['link', {
            rel: 'icon',
            href: 'images/boke.ico'
        }]
    ],
    base: '/home/',
    themeConfig: {
        repo: 'iyuwb/boke',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: '点击编译该文档',
        lastUpdated: '最新更新时间',
        logo: 'images/wenbo.jpg',
        nav: [{
            text: '日常笔记 ',
            items: [{
                text: '个人简历',
                link: '/日常笔记/个人简历'
            },
                {
                    text: '日常笔记',
                    link: '/Notes/前端笔记'
                }
            ]
        },
            {
                text: '前端基础',
                items: [{
                    text: 'JavaScript',
                    link: '/JavaScript/JavaScript-常用方法'
                },
                    {
                        text: 'TypeScript',
                        link: '/TypeScript/TypeScript基础'
                    },
                    {
                        text: 'HTMLCSS',
                        link: '/HTMLCSS/HTML5CSS3'
                    },
                ]
            },
            {
                text: '前端框架',
                items: [{
                    text: 'Vue',
                    link: '/Vue/Vue进阶之旅'
                },
                    {
                        text: 'React',
                        link: '/React/React入门'
                    }
                ]
            },
            {
                text: '插件使用',
                items: [{
                    text: 'Openlayers',
                    link: '/Openlayers/Openlayers'
                }, {
                    text: 'Node版本管理',
                    link: '/插件使用/Node版本管理'
                }]
            },
            {
                text: '其他内容',
                items: [{
                    text: '读书笔记',
                    link: '/读书笔记/[JavaScript高级程序设计]读书笔记'
                },]
            }
        ],
        sidebar: {
            '/日常笔记/': [
                '个人简历',
            ],
            '/JavaScript/': [
                'JavaScript笔记',
                'JavaScript-常用方法',
                'JavaScript深入理解-内置对象方法',
                'JavaScript深入理解-原型链',
                'JavaScript深入理解-正则表达式',
                'JavaScript深入理解-ECMAScript 6',
                'JavaScript深入理解-Promise',
                'JavaScript深入理解-PWA渐进式应用',
                'JavaScript深入理解-Set、Map、WeakSet和WeakMap',
                'JavaScript深入理解-H5离线储存',
                'JavaScript简单了解-WebSocket',
            ],
            '/HTMLCSS/': [
                '样式滤镜 Filter',
                '网格布局 Grid',
                '响应式布局方案',
                'CSS选择器',
                'HTML5CSS3',
                'H5端REM适配方案',
                'Canvas实现两张图片合成'
            ],
            '/Notes/': [
                '前端笔记',
                'H5相关问题',
                'GIT相关操作方法',
                '计算机基础-浏览器是运作原理',
                'HTTPS原理解析',
                'HTTP请求详解'
            ],
            '/读书笔记/': [
                '[JavaScript高级程序设计]读书笔记',
            ],
            '/React/': [
                'React入门',
            ],
            '/TypeScript/': [
                'TypeScript基础',
            ],
            '/Vue/': [
                'Vue数据响应原理解析',
                'Vue进阶之旅',
                '在Vue2.0中使用Less与Sass',
            ],
            '/Openlayers/': [
                'Openlayers',
            ],
            '/插件使用/': [
                'Node版本管理',
            ],
        },
        displayAllHeaders: true
    }
}