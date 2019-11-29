var config = require('./');

module.exports = {
  autoprefixer: {  overrideBrowserslist: ['last 2 version'] },
  src: config.sourceAssets + '/sass/style.scss',
  watch : config.sourceAssets + '/sass/**/*.scss',
  dest: config.publicAssets + '/css',
  settings: {
    imagePath: '../images'
  }
};