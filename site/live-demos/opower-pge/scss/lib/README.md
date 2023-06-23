lets-get-sassy
==============

just the sass pulled out of x-web-default-resources, for rapid prototyping.

We're using SCSS, but there is no preprocessor included in this package, so you need to install sass
```
gem install sass
```
and then put a watcher on the /scss/root.scss file
```
sass --watch scss/root.scss:style.css
```
or if you're using grunt or some other build system, point it to the /scss/root.scss file.