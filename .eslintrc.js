module.exports = {
    // settings: {
    //     'import/resolver': {
    //         "node": {
    //             "paths": ["src"]
    //         }
    //     }
    // },
    // "plugins": [
    //     "import"
    // ],
    "parser": "vue-eslint-parser",
    "ignorePatterns": [
        "generated-stories-entry.js",
        "storybook-init-framework-entry.js"
    ],
    parserOptions: {
        parser: 'babel-eslint',
        // ecmaVersion: 'latest',
        //把 latest 这里修改一下就好了
        ecmaVersion: 12,
        sourceType: 'module',
        allowImportExportEverywhere: true, // 不限制eslint对import使用位置
        ecmaFeatures: {
            modules: true,
            legacyDecorators: true
        }
    },
    "plugins": [
        "html",
        "vue"
    ]
}