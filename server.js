/*eslint no-console:0 */
'use strict'
const path = require('path')
const express = require('express')
const webpack = require('webpack')
const config = require('./webpack.config.dev')

const app = express()

app.use(require('connect-history-api-fallback')())

const compiler = webpack(config)
app.use(require('webpack-dev-middleware')(compiler, config.devServer))
app.use(require('webpack-hot-middleware')(compiler))

app.listen(config.devServer.port, function () {
    console.log('Server listening on http://127.0.0.1:'+ config.devServer.port + ', Ctrl+C to stop')
})
