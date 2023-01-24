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

const webp = require('gulp-webp');

function css(done) {
    src("src/scss/**/*.scss")// Identificar el archivo de SASS
    .pipe(plumber())
    .pipe(sass())//Compilarlo
    .pipe(dest("build/css"))//Almancenarlo en el disco duro

    done();
} // Callback que avisa al gulp cuando llegamos al final 

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
exports.versionWebp = versionWebp;
exports.dev = parallel(versionWebp, dev);