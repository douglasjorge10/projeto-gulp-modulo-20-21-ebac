const gulp = require('gulp');
const concat = require('gulp-concat');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const { parallel } = require('gulp');

function tarefasCSS(cb){
    gulp.src([
       './node_modules/bootstrap/dist/css/bootstrap.css',
       './node_modules/@fortawesome/fontawesome-free/css/fontawesome.css',
       './vendor/jquery-ui/jquery-ui.css',
       './vendor/owl/css/owl.css',
       './src/css/style.css',
       './src/css/style-produtos.css',
       
    
    ])
    .pipe(concat('style.css'))
    .pipe(cssmin())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('./dist/css'))
    cb()
}

function tarefasJS(callback){
     gulp.src([
        './node_modules/jquery/dist/jquery.js',
        './node_modules/bootstrap/dist/js/bootstrap.js',
        './node_modules/@fortawesome/fontawesome-free/js/fontawesome.js',
        './vendor/jquery-mask/jquery.mask.js',
        './vendor/jquery-ui/jquery-ui.js',
        './vendor/owl/js/owl.js',
        './src/js/custom.js'

    
    ])
     .pipe(concat('script.js'))
     .pipe(uglify())
     .pipe(rename({suffix:'.min'}))
     .pipe(gulp.dest('./dist/js'))
     callback()
 }
function tarefasHTML(callback){
    gulp.src('./src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist'))

        callback()
}

exports.styles = tarefasCSS
exports.scripts = tarefasJS
exports.default = parallel( tarefasHTML, tarefasCSS, tarefasJS)