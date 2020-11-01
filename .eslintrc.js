module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2020,
    },
    env: {
        browser: true,
        es6: true,
        node: true,
        jest: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    extends: [
        'standard',
        'plugin:import/recommended',
        'plugin:jest/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
    ],
    rules: {
        'arrow-parens': [1, 'as-needed'],
        'comma-dangle': [1, 'always-multiline'],
        indent: [1, 4, {
            SwitchCase: 1,
        }],
        'import/order': [2, {
            groups: [
                'builtin',
                'external',
                'internal',
                [
                    'parent',
                    'sibling',
                    'index',
                ],
            ],
            'newlines-between': 'always',
        }],
        'max-len': [1, {
            code: 120,
        }],
        'multiline-ternary': 'off',
        'newline-after-var': 1,
        'no-console': 2,
        'no-extra-semi': 2,
        'no-multiple-empty-lines': [1, {
            max: 1,
            maxEOF: 1,
        }],
        'operator-linebreak': 'off',
        'object-curly-spacing': [1, 'always'],
        'space-before-function-paren': [1, 'never'],
        semi: [2, 'always'],
        'jsx-quotes': [1, 'prefer-double'],
    },
    globals: {
        app: true,
    },
};
