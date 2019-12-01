const mix = require('laravel-mix');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const imageminMozjpeg = require('imagemin-mozjpeg');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.browserSync({proxy:'localhost:3003'})
    .js('resources/js/app.js', 'public/js')
    .extract(['jquery', 'axios', 'bootstrap', 'popper.js', 'lodash'])
    .sass('resources/sass/app.scss', 'public/css')
    .options({
        processCssUrls: false 
});


mix.webpackConfig({
    plugins: [
        new CopyWebpackPlugin([{
            from: 'resources/images',
            to: 'images',
        }]),
        new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i,
            plugins: [
                imageminMozjpeg({
                    quality: 80,
                })
            ]
        })
    ]
});