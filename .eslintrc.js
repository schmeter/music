module.exports = {
    extends: [
        'semistandard',
        'standard-react',
    ],
    plugins: [
        'import',
        'jest',
    ],
    env: {
        'jest/globals': true,
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            modules: true,
        },
    },
    rules: {
        'arrow-parens': ['warn', 'as-needed'],
        'comma-dangle': ['warn', 'always-multiline'],
        'import/extensions': [
            'warn',
            {
                js: 'never',
                json: 'always',
            },
        ],
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
        'jsx-quotes': [
            'warn',
            'prefer-double',
        ],
        'react/jsx-indent': [
            'warn',
            4,
        ],
        'react/jsx-indent-props': [
            'warn',
            4,
        ],
    },
    globals: {
        document: true,
        window: true,
        fetch: true,
        app: true,
    },
};
