const {
    override,
    disableEsLint,
    fixBabelImports,
    addDecoratorsLegacy,
    addWebpackAlias,
} = require('customize-cra')

const addLessLoader = require("customize-cra-less-loader");

const path = require('path')

module.exports = override(
    disableEsLint(),
    addDecoratorsLegacy(),
    fixBabelImports('antd', {
        libraryDirectory: 'lib',
        style: true,
    }),
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            plugins: []
        },
    }),
    addWebpackAlias({
        '@': path.resolve(__dirname, 'src'),
    })
)
