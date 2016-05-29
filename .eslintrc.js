module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      experimentalObjectRestSpread: true
    }
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true
  },
  plugins: [
    // Enable when https://github.com/flowtype/flow-for-vscode/issues/13 is
    // fixed.
    // 'flowtype',
    'jsdoc',
    'node',
    'promise'
  ],
  // http://eslint.org/docs/rules/
  rules: {
    // Possible Errors
    'comma-dangle': [1, 'never'],
    'no-cond-assign': [2, 'always'],
    'no-console': [1, {allow: ['warn', 'error']}],
    'no-constant-condition': 2,
    'no-control-regex': 2,
    'no-debugger': 1,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty': [1, {allowEmptyCatch: true}],
    'no-empty-character-class': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': 1,
    'no-extra-semi': 1,
    'no-func-assign': 2,
    'no-inner-declarations': 2,
    'no-invalid-regexp': [2, {allowConstructorFlags: ['u', 'y']}],
    'no-irregular-whitespace': [2, {
      skipStrings: false,
      skipComments: false,
      skipRegExps: false,
      skipTemplates: false
    }],
    'no-negated-in-lhs': 2,
    'no-obj-calls': 2,
    'no-prototype-builtins': 2,
    'no-regex-spaces': 2,
    'no-sparse-arrays': 2,
    'no-unexpected-multiline': 2,
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'use-isnan': 2,
    // Use jsdoc plugin instead of valid-jsdoc.
    // https://github.com/gajus/eslint-plugin-jsdoc/issues/1#issuecomment-182400324
    'valid-typeof': 2,

    // Best Practices
    'accessor-pairs': 1,
    'array-callback-return': 2,
    'block-scoped-var': 2,
    complexity: [1, 8], // eslint-disable-line no-magic-numbers
    'consistent-return': 2,
    curly: [2, 'multi-line'],
    'default-case': 1,
    'dot-location': [1, 'property'],
    'dot-notation': 1,
    eqeqeq: [2, 'smart'],
    'guard-for-in': 2,
    'no-alert': 1,
    'no-caller': 1,
    'no-case-declarations': 2,
    'no-else-return': 1,
    'no-empty-function': 1,
    'no-empty-pattern': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-label': 2,
    'no-fallthrough': 2,
    'no-implicit-coercion': 2,
    'no-implicit-globals': 2,
    'no-implied-eval': 2,
    'no-invalid-this': 2,
    'no-iterator': 2,
    'no-labels': 2,
    'no-lone-blocks': 1,
    'no-loop-func': 2,
    'no-magic-numbers': [1, {ignore: [-1, 0, 1, 2], enforceConst: true}],
    'no-multi-spaces': 1,
    'no-native-reassign': 2,
    'no-new': 2,
    'no-new-func': 2,
    'no-new-wrappers': 1,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-param-reassign': 1,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-return-assign': [2, 'always'],
    'no-script-url': 1,
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-unmodified-loop-condition': 2,
    'no-unused-expressions': 1,
    'no-unused-labels': 1,
    'no-useless-call': 2,
    'no-useless-concat': 1,
    'no-useless-escape': 2,
    'no-void': 2,
    'no-with': 2,
    radix: [1, 'always'],
    'vars-on-top': 1,
    yoda: 1,

    // Strict Mode
    strict: [2, 'never'],

    // Variables
    'no-delete-var': 2,
    'no-shadow-restricted-names': 2,
    'no-undef': [2, {typeof: true}],
    'no-undef-init': 1,
    'no-undefined': 2,
    'no-unused-vars': [1, {args: 'all', caughtErrors: 'all'}],
    'no-use-before-define': [2, 'nofunc'],

    // Node.js and CommonJS
    'callback-return': 2,
    'global-require': 1,
    'handle-callback-err': 2,
    'no-mixed-requires': [1, {grouping: true}],
    'no-new-require': 2,
    'no-path-concat': 1,
    'no-process-exit': 1,
    'no-sync': 1,

    // Stylistic Issues
    'array-bracket-spacing': 1,
    'block-spacing': 1,
    'brace-style': 1,
    camelcase: 1,
    'comma-spacing': 1,
    'comma-style': 1,
    'computed-property-spacing': 1,
    'consistent-this': 1,
    'func-style': [1, 'declaration'],
    indent: [1, 2],
    'jsx-quotes': [1, 'prefer-single'],
    'key-spacing': 1,
    'keyword-spacing': 1,
    'linebreak-style': 1,
    'max-depth': 1,
    'max-len': [1, {tabWidth: 2, ignoreUrls: true}],
    'max-nested-callbacks': [1, {max: 4}],
    'max-params': [1, 4], // eslint-disable-line no-magic-numbers
    'max-statements': [1, {max: 20}],
    'max-statements-per-line': 1,
    'new-cap': 2,
    'new-parens': 1,
    'newline-per-chained-call': 1,
    'no-array-constructor': 1,
    'no-bitwise': 1,
    'no-continue': 1,
    'no-lonely-if': 1,
    'no-mixed-spaces-and-tabs': 1,
    'no-multiple-empty-lines': [1, {max: 2, maxEOF: 0, maxBOF: 0}],
    'no-negated-condition': 1,
    'no-nested-ternary': 1,
    'no-new-object': 1,
    'no-spaced-func': 1,
    'no-trailing-spaces': 1,
    'no-unneeded-ternary': 1,
    'no-whitespace-before-property': 1,
    'object-curly-spacing': 1,
    'one-var': [2, {var: 'always', let: 'never', const: 'never'}],
    'operator-assignment': 1,
    'operator-linebreak': [1, 'before'],
    'padded-blocks': [1, 'never'],
    'quote-props': [1, 'as-needed'],
    quotes: [1, 'single', {avoidEscape: true}],
    semi: [1, 'never'],
    'semi-spacing': 1,
    'space-before-blocks': 1,
    'space-before-function-paren': [1, 'never'],
    'space-in-parens': [1, 'never'],
    'space-infix-ops': 1,
    'space-unary-ops': 1,
    'spaced-comment': 1,
    'unicode-bom': 1,

    // ECMAScript 6
    'arrow-body-style': 1,
    'arrow-parens': [1, 'as-needed'],
    'arrow-spacing': 1,
    'constructor-super': 2,
    'generator-star-spacing': 1,
    'no-class-assign': 2,
    'no-confusing-arrow': [2, {allowParens: true}],
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-duplicate-imports': 1,
    'no-new-symbol': 2,
    'no-this-before-super': 2,
    'no-useless-computed-key': 1,
    'no-useless-constructor': 1,
    'no-useless-rename': 1,
    'no-var': 1,
    'object-shorthand': 1,
    'prefer-arrow-callback': 1,
    'prefer-const': 1,
    'prefer-reflect': 1,
    'prefer-rest-params': 1,
    'prefer-spread': 1,
    'prefer-template': 1,
    'require-yield': 2,
    'sort-imports': 1,
    'template-curly-spacing': 1,
    'yield-star-spacing': 1,

    // Enable when https://github.com/flowtype/flow-for-vscode/issues/13 is
    // fixed.
    // https://www.npmjs.com/package/eslint-plugin-flowtype#eslint-plugin-flowtype-settings
    // flowtype/require-parameter-type: 2
    // flowtype/require-return-type: 2
    // flowtype/space-after-type-colon: 2
    // flowtype/space-before-type-colon: 2
    // flowtype/type-id-match: 2

    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules
    'jsdoc/check-param-names': 1,
    'jsdoc/check-tag-names': 1,
    'jsdoc/check-types': 1,
    'jsdoc/newline-after-description': [1, 'never'],
    'jsdoc/require-description-complete-sentence': 1,
    // Use flowtype instead of jsdoc for typing.
    // https://github.com/gajus/eslint-plugin-jsdoc/issues/1#issuecomment-184328594

    // https://www.npmjs.com/package/eslint-plugin-node#rules
    'node/no-deprecated-api': 2,
    'node/no-missing-import': 2,
    'node/no-missing-require': 2,
    'node/no-unpublished-import': 2,
    'node/no-unpublished-require': 2,
    'node/no-unsupported-features': [2, {version: 6}],
    'node/process-exit-as-throw': 2,
    'node/shebang': 2,

    // https://www.npmjs.com/package/eslint-plugin-promise#rule
    'promise/always-return': 2,
    'promise/param-names': 2
  },
  settings: {
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-settings-alias-preference
    jsdoc: {
      // Pick one synonym for each listed. http://usejsdoc.org/#block-tags
      tagNamePreference: {
        abstract: 'virtual',
        augments: 'extends',
        constructor: 'class',
        constant: 'const',
        defaultvalue: 'default',
        description: 'desc',
        host: 'external',
        fileoverview: 'file',
        overview: 'file',
        fires: 'emits',
        function: 'func',
        method: 'func',
        member: 'var',
        param: 'arg',
        argument: 'arg',
        property: 'prop',
        returns: 'return',
        exception: 'throws',
        linkcode: 'link',
        linkplain: 'link'
      }
    }
  }
}