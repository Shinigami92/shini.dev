// @ts-check

/**
 * @type {import('prettier').Options}
 */
module.exports = {
  plugins: [require.resolve('@prettier/plugin-pug'), require.resolve('prettier-plugin-organize-imports')],

  arrowParens: 'always',
  bracketSpacing: true,
  printWidth: 120,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  useTabs: false,

  pugSingleQuote: false,
  pugSortAttributesBeginning: [
    '^v-if$',
    '^v-else-if$',
    '^v-else$',
    '^v-for$',
    '^:key$',
    '^v-on(\\.\\w+)*$',
    '^v-bind$',
    '^ref$',
    '^v-model',
    '^name$',
    '^:?type$',
    '^:value$',
    '^:?src$'
  ],
  pugSortAttributesEnd: ['^@click', '^@']
};
