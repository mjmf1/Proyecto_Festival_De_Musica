const {src, dest , watch, parallel} = require("gulp");

// CSS
const sass = require("gulp-sass")(require("sass"));
const plumber = require('gulp-plumber');


//const sass = require('gulp-sass')(require('sass'));
/*function tarea (cb) { // cb = callback
    //console.log('mi primera tarea');
    cb();
}
exports.primerTarea = tarea;*/

// Imagenes

const cache = require('gulp-cache');
const imagenin = require('gulp-imagemin');
const webp = require('gulp-webp');

function css(done) {
    src("src/scss/**/*.scss")// Identificar el archivo de SASS
    .pipe(plumber())
    .pipe(sass())//Compilarlo
    .pipe(dest("build/css"))//Almancenarlo en el disco duro

    done();
} // Callback que avisa al gulp cuando llegamos al final 

function imagenes(done) {
    const opciones = {
        optimizationLevel: 3
    }
    src('src/img/**/*.{jpg, png}')
        .pipe
        .pipe(dest('build/img') )
    done(cache(imagenin(opciones) ) );
}

function versionWebp(done) {

    const opciones = {
        quality: 50
    };

    src('src/img/**/*.{jpg, png}')
    .pipe(webp(opciones))
    .pipe(dest('build/img') )

    done();
}

function dev(done) {
    watch("src/scss/**/*.scss", css);

    done();
}

exports.css = css;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.dev = parallel(imagenes,versionWebp, dev);