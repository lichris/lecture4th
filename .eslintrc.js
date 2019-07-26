module.exports = {
    "env": {
        "es6": true,
        "jest": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "array-bracket-newline": ["error", { "minItems": 1 }],
        "array-bracket-spacing": ["error", "always"],
        "array-element-newline": ["error", { "multiline": true, "minItems": 1 }],
        "block-spacing": "error",
        "comma-dangle": ["error", "never"],
        "comma-spacing": ["error", { "after": true, "before": false }],
        "func-call-spacing": ["error", "never"],
        "implicit-arrow-linebreak": ["error", "beside"],
        "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 2 }],
        "no-trailing-spaces": ["error", { "skipBlankLines": true }],
        "object-curly-newline": ["error", { "consistent": true }],
        "object-curly-spacing": ["error", "always"],
        "quotes": ["error", "single", { "allowTemplateLiterals": true }],
        "semi": ["error", "never"],
        "space-before-function-paren": ["error", "always"],
        "template-curly-spacing": ["error", "always"]
    }
};
