module.exports = {
    extends: [
        'prettier'
    ],
    plugins: [
        'prettier'
    ],
    rules: {
        'prettier/prettier': [
            'error'
        ]
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            'jsx': true,
            'modules': true
        },
    },
    globals: {
        document: true,
        window: true,
        fetch: true,
        app: true
    }
};
