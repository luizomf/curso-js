/*
babel-eslint, eslint, eslint-plugin-react
*/
module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "prefer-const": [
            "error"
        ],
        "max-len": [
            "error",
            { "code": 80, "ignoreStrings": true, "ignoreUrls": true }
        ],
        "no-unused-vars": [
            "error",
            {
                "varsIgnorePattern": "React"
                // "varsIgnorePattern": "[Ii]gnored[vV]ar|[R]eact" 
            }
        ],
        "indent": [
            "error",
            2
        ],
        "space-before-function-paren": [
            "error",
            "never"
        ],
        "keyword-spacing": [
            "error",
            {
                "after": true,
                "before": true
            }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "eol-last": [
            "error",
            "always"
        ],
        "space-before-blocks": [
            "error",
            "always"
        ],
        "comma-spacing": [
            "error", {
                "after": true
            }
        ],
        "space-infix-ops": [
            "error",
            {
                "int32Hint": false
            }
        ],
        "key-spacing": [
            "error",
            {
                "afterColon": true
            }
        ],
        "no-trailing-spaces": [
            "error",
            {
                "skipBlankLines": false,
                // "skipBlankLines": true,
                "ignoreComments": false,
                // "ignoreComments": true
            }
        ],
        "space-before-function-paren": [
            "error",
            {
                "anonymous": "never",
                "named": "never",
                "asyncArrow": "never"
            }
        ],
        "arrow-spacing": [
            "error",
            {
                "before": true,
                "after": true
            }
        ],
        "space-in-parens": [
            "error",
            "never"
        ],
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "require-atomic-updates": "off"
    }
};