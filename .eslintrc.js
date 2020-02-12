module.exports = {
    extends: [
        'standard',
        'plugin:react/recommended',
        'plugin:import/recommended',
    ],
    plugins: [
        'jest',
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    env: {
        'jest/globals': true,
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2018,
    },
    rules: {
        'arrow-parens': ['warn', 'as-needed'],
        'comma-dangle': ['warn', 'always-multiline'],
        indent: [
            'warn',
            4,
            {
                SwitchCase: 1,
            },
        ],
        'max-len': [
            'warn',
            {
                code: 120,
            },
        ],
        'newline-after-var': 1,
        'no-console': 2,
        'no-extra-semi': 2,
        'no-multiple-empty-lines': [
            'warn',
            {
                max: 1,
                maxEOF: 1,
            },
        ],
        'operator-linebreak': 'off',
        'object-curly-spacing': [
            'warn',
            'always',
        ],
        'space-before-function-paren': ['warn', 'never'],
        'semi': [2, 'always'],
        'jsx-quotes': [
            'warn',
            'prefer-double',
        ],
    },
    globals: {
        document: true,
        window: true,
        fetch: true,
        app: true,
    },
};
