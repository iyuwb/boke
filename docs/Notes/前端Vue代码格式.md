# 前端 Vue 代码格式统一

## VScode 下载安装插件 vetur

## settings.json 添加设置

```json
//==================vetur格式化配置=====================
    "vetur.format.defaultFormatter.stylus": "stylus-supremacy",
    "vetur.format.defaultFormatter.css": "prettier",
    "vetur.format.defaultFormatter.scss": "prettier",
    "vetur.format.defaultFormatter.less": "prettier",
    "vetur.format.defaultFormatter.html": "js-beautify-html",
    // "vetur.format.defaultFormatter.html": "prettyhtml",
    "vetur.format.defaultFormatter.js": "prettier",
    // "vetur.format.defaultFormatter.js": "vscode-typescript",//希望js不换行显示
    "vetur.format.defaultFormatterOptions": {
        "prettier": {
            "semi": true, // 句尾是否加;
            "singleQuote": true, // 使用单引号而不是双引号
        },
        "js-beautify-html": {
            "wrap_line_length": 300, //多少字符换行
            "singleQuote": true,
            "wrap_attributes": "force-expand-multiline",
            // "wrap_attributes": "force-aligned"// 属性强制折行对齐
        },
        "prettyhtml": {
            "printWidth": 100,
            "singleQuote": true,
            "wrapAttributes": false,
            "sortAttributes": false
        }
    },
    // "vetur.format.options.useTabs": true,
    "vetur.format.options.tabSize": 4, //缩进宽度
    "editor.formatOnSave": true, //保存时自动格式化
    "editor.formatOnPaste": true, // 在粘贴时自动格式化
    //==================vetur格式化配置End===================
```

## 设置文档格式化方式为 Vetur
