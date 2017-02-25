const elixir = require('laravel-elixir');

const themePath = 'public/themes/web-seed/';

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application as well as publishing vendor resources.
 |
 */

elixir((mix) => {
    mix
        .sass('app.scss', themePath + 'dist/app.css')
        .rollup('app.js', themePath + 'dist/app.js')
    ;
});
