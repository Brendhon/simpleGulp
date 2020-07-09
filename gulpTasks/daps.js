// Dependencias externas
const gulp = require('gulp')
const uglyfycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function dapsCSS(cb) {
    return gulp.src('node_modules/font-awesome/css/font-awesome.css')
        .pipe(uglyfycss({ "uglyComments": false }))
        .pipe(concat("deps.min.css"))
        .pipe(gulp.dest('build/assets/css'))
}

function dapsFONTS(cb) {
    return gulp.src('node_modules/font-awesome/fonts/*.*')
        .pipe(gulp.dest('build/assets/fonts'))
}

module.exports = {
    dapsCSS,
    dapsFONTS
}
