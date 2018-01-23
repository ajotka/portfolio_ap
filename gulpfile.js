var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();

gulp.task('browser-sync', function () {
    var files = [
        'public/*.html',
        'src/css/*.scss',
        'assets/js/*.js'
    ];

    browserSync.init(files, {
        server: {
            baseDir: 'public'
        }
    });
});

// Default task to be run with `gulp`
gulp.task('default', ["browser-sync", "sass", "watch"]);

gulp.task('sass', function(){
    return gulp.src('src/css/styles.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('public/assets/css/'))
});
gulp.task('watch', function(){
    gulp.watch('src/css/styles.scss', ['sass']);
    gulp.watch('assets/js/*.js', ['jshint']);
    // Other watchers
});

gulp.watch("public/*.html").on('change', browserSync.reload);

