module.exports = function() {
    var config = {
        rootFiles: [
            "favicon.ico",
            "index.html",
        ],
        images: [
            "./img/**/*.jpg",
            "./img/**/*.png"
        ],
        libJs: [
            "js/modernizr.js",
            "node_modules/jquery/dist/jquery.min.js",
            "node_modules/bootstrap/dist/js/bootstrap.min.js",
            "node_modules/gmaps/gmaps.min.js",
            "node_modules/masonry-layout/dist/masonry.pkgd.min.js",
            "node_modules/jquery.scrollto/jquery.scrollTo.min.js",
            "js/waypoints.min.js",
            "js/owl.carousel.min.js",
            "js/front.js"
        ],
        libCss: [
            "node_modules/font-awesome/css/font-awesome.min.css",
            "node_modules/bootstrap/dist/css/bootstrap.min.css",
            "css/style.blue.css",
            "css/custom.css",
            "css/owl.carousel.css",
            "css/owl.theme.css",
            "css/animate.css"
        ],
        fonts: [
            "node_modules/font-awesome/fonts/**/*.*",
            "!node_modules/font-awesome/fonts/**/*.html",
        ],
        dist: "./wwwroot",
        libJsDist: "./wwwroot/lib.js",
        fontsDist: "./wwwroot/fonts/"
    };
    return config;
};