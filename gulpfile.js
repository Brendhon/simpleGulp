const { series, parallel } = require('gulp')
const gulp = require('gulp')

const { appHTML, appCSS, appJS, appIMG } = require('./gulpTasks/app')
const { dapsCSS, dapsFONTS } = require('./gulpTasks/daps')
const { monitorarArquivos, servidor } = require('./gulpTasks/servidor')


module.exports.default = series(
    parallel(
        series(appHTML, appCSS, appJS, appIMG),
        series(dapsCSS, dapsFONTS)
    ),
    servidor,
    monitorarArquivos
)