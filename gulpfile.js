"use strict";

var gulp = require("gulp");
var config = require("./gulp.config.js")();
var $ = require("gulp-load-plugins")();

gulp.task("clean", function () {
    return gulp.src(config.dist)
        .pipe($.clean());
});

gulp.task("fonts", ["clean"], function () {
    return gulp.src(config.fonts, { base: "./" })
        .pipe($.flatten())
        .pipe(gulp.dest(config.fontsDist));
});

gulp.task("app-images", ["fonts"], function () {
    var pngquant = require("imagemin-pngquant");

    return gulp.src(config.images)
        .pipe($.imagemin({
            progressive: true,
            svgoPlugins: [
                { removeViewBox: false },
                { cleanupIDs: false }
            ],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(config.dist + "/img"));
});

gulp.task("app", ["app-images"], function () {
    return gulp.src(config.rootFiles, { base: "./" })
        .pipe(gulp.dest(config.dist));
});

gulp.task("modernizr", ["app"], function() {
  gulp.src("js/front.js", { base: "./"})
    .pipe($.modernizr())
    .pipe(gulp.dest("./js"))
    .pipe(gulp.dest(config.dist + "/js"));
});

gulp.task("inject", ["modernizr"], function () {
    var es = require("event-stream");

    var js = gulp.src(config.libJs)
        .pipe(gulp.dest(config.dist + "/js"));

    var css = gulp.src(config.libCss)
        .pipe($.cleanCss({ compatibility: "ie8" }))
        .pipe($.concat("lib.min.css"))
        .pipe(gulp.dest(config.dist));

    return gulp.src("./index.html")
        .pipe($.inject(es.merge(js, css), { ignorePath: "/wwwroot" }))
        .pipe($.stripComments())
        .pipe($.htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest(config.dist));
});

gulp.task("default", ["inject"]);