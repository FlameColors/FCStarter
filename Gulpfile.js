var gulp = require('gulp');
var browser = require('browser-sync');
var reload = browser.reload;

gulp.task('serve', function() {
    browser({
        port: process.env.PORT || 4520,
        open: false,
        ghostMode: false,
        server: {
            baseDir: '.'
        }
    });
});

gulp.task('watch', function() {
    gulp.watch(['*.html', 'tpl/css/style.css', 'tpl/js/onload.js'], reload);
});

gulp.task('default', ['watch', 'serve']);