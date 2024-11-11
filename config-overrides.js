const {
    override,
    disableEsLint,
    fixBabelImports,
    addDecoratorsLegacy,
    addWebpackAlias,
} = require('customize-cra')

const path = require('path')

module.exports = override(
    disableEsLint(),
    addDecoratorsLegacy(),
    fixBabelImports('antd', {
        libraryDirectory: 'lib',
        style: true,
    }),

    addWebpackAlias({
        '@': path.resolve(__dirname, 'src'),
    })
)
