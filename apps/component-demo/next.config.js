const path = require('path');

const stylexPlugin = require('@stylexjs/nextjs-plugin');

module.exports = stylexPlugin({
    rootDir: path.join(__dirname, '../../'),
})({
    transpilePackages: ['@repo/style'],
});
