const mix = require('laravel-mix');

mix.sass('resources/scss/style.scss','public/assets/css/style.css')
mix.scripts('node_modules/jquery/dist/jquery.min.js', 'public/assets/js/jquery.min.js')
mix.scripts('node_modules/bootstrap/dist/js/bootstrap.bundle.min.js', 'public/assets/js/bootstrap.bundle.min.js')
