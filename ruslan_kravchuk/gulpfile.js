var gulp        = require('gulp'), // Подключаем Gulp
    sass        = require('gulp-sass'), //Подключаем Sass пакет,
    browserSync = require('browser-sync').create(), // Подключаем Browser Sync
    sassGlob =    require('gulp-sass-glob'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS =    require('gulp-clean-css'),
    babel =       require('gulp-babel'),
    concat =      require('gulp-concat'),
    uglify =      require('gulp-uglify'),
    concatCss =   require('gulp-concat-css');


gulp.task('sass', function(){ // Создаем таск Sass
    return gulp.src(['sass/**/*.sass', 'scss/**/*.scss' ]) // Берем источник
        .pipe(sassGlob())
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('./css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});



gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync.init({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: './' // Директория для сервера - app
        }        
    });
});

gulp.task('kod', function() {
  return gulp.src(['*.html', '*.php'])
  .pipe(gulp.dest('dist'))
  .pipe(browserSync.reload({stream: true}))  

});

gulp.task('script', function() {
  return gulp.src(['js/*.js', 'lib/*.js'])
  .pipe(babel({
            presets: ['@babel/env']
        }))
  .pipe(concat('all.js'))
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'))
  .pipe(browserSync.reload({stream: true}))

});

gulp.task('jpg', function() {
  return gulp.src(['img/*.jpg', 'img/*.png'])
  .pipe(gulp.dest('dist/img')) 
  .pipe(browserSync.reload({stream: true}))

});

gulp.task('css', function() {
  return gulp.src('css/**/*.css')
  .pipe(autoprefixer({
           cascade:  false
        }))
  .pipe(cleanCSS({level: 2}))
  .pipe(concatCss("./main.css"))
  .pipe(gulp.dest('dist/css'))  
  .pipe(browserSync.reload({stream: true}))

});

gulp.task('watch', function() {
    gulp.watch(['sass/**/*.sass', 'scss/**/*.scss'], gulp.parallel('sass'));     // Наблюдение за sass файлами
    gulp.watch('css/**/*.css', gulp.parallel('css'));   
    gulp.watch(['js/**/*.js', 'lib/**/*.js'], gulp.parallel('script'));
    gulp.watch('./*.html', gulp.parallel('kod')); 
    gulp.watch(['img/**/*.jpg', 'img/**/*.png'], gulp.parallel('jpg'));
    
});
gulp.task('default', gulp.parallel('sass', 'browser-sync', 'watch'));

    