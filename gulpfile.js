const {src, dest} = require("gulp");
const sass = require('gulp-sass')(require('sass'));


//const sass = require('gulp-sass')(require('sass'));
/*function tarea (cb) { // cb = callback
    //console.log('mi primera tarea');
    cb();
}
exports.primerTarea = tarea;*/

function css(done) {
    src('src/scss/app.scss')// Identificar el archivo de SASS
    .pipe(sass())//Compilarlo
    .pipe(dest("build/css"))//Almancenarlo en el disco duro

    done();
} // Callback que avisa al gulp cuando llegamos al final 

exports.css = css;