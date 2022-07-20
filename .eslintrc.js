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
    "parser": "babel-eslint",
    "ignorePatterns": [
        "generated-stories-entry.js",
        "storybook-init-framework-entry.js"
    ],
    "plugins": [
        "html",
        "vue"
    ]
}