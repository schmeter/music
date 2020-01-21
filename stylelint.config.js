module.exports = {
    extends: [
        'stylelint-config-sass-guidelines',
        'stylelint-config-property-sort-order-smacss',
    ],
    ignoreFiles: [
        'node_modules/**',
        'src/sass/lib/**',
    ],
    rules: {
        indentation: 4,
        'max-nesting-depth': 4,
        'order/properties-alphabetical-order': null,
        'selector-max-compound-selectors': 4,
    },
};
