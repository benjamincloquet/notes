/* eslint-disable import/no-dynamic-require */
const { merge } = require('webpack-merge');
const common = require('./webpack/webpack.common');

const env = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';

const config = require(`./webpack/webpack.${env}.js`);
module.exports = merge(common, config);
