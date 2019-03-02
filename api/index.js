const { photos } = require('./controllers/photosController');
module.exports = app => {
  app.route('/api/photos').get(photos);
};
