const {src, dest , watch, parallel} = require("gulp");

// CSS
const sass = require("gulp-sass")(require("sass"));
const plumber = require('gulp-plumber');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');

// Imagenes
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin'); // Imagenes de foto anitguo
const webp = require('gulp-webp'); // Imagenes de formato modernos
const avif = require('gulp-avif');


function css(done) {
    src("src/scss/**/*.scss")// Identificar el archivo de SASS
    .pipe(sourcemaps.init() )
    .pipe(plumber())
    .pipe(sass())//Compilarlo
    .pipe(postcss([autoprefixer(), cssnano() ]) )
    .pipe(sourcemaps.write('.'))
    .pipe(dest("build/css"))//Almancenarlo en el disco duro

    done();
} // Callback que avisa al gulp cuando llegamos al final 

function imagenes(done) { // probando Imagemin para reducir peso de imagenes
    const opciones = {
        optimizationLevel: 3
    }
    src('src/img/**/*.{jpg, png}')
        .pipe(dest('build/img') )
        .pipe(cache(imagemin(opciones) ) );

    done();
}

function versionWebp(done) { // Transformar Imagenes a version Webp
    const opciones = {
        quality: 50
    };
    src('src/img/**/*.{jpg, png}')
    .pipe(webp(opciones))
    .pipe(dest('build/img') )

    done();
}
function versionAvif(done) { // Transformar Imagenes a version Avif
    const opciones = {
        quality: 50
    };
    src('src/img/**/*.{jpg, png}')
    .pipe(avif(opciones))
    .pipe(dest('build/img') )

    done();
}

function JavaScript(done) {
    src("src/js/**/*.js")
    .pipe(dest('build/js') )

    done();
}

function dev(done) { // El dev escucha por los camo}bios en SASS
    watch("src/scss/**/*.scss", css);
    watch("src/js/**/*.js", JavaScript);

    done();
}
// Llamado de funciones
exports.css = css;
exports.js = JavaScript;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.dev = parallel( imagenes, versionWebp, versionAvif, JavaScript, dev);