const { unsplash, toJson } = require('../utils/Unsplash');
global.fetch = require('node-fetch');

module.exports = {
  photos: async (req, res) => {
    unsplash.photos
      .listPhotos(1, 2)
      .then(toJson)
      .then(json => res.json(json));
  },
};
