const Unsplash = require('unsplash-js');
require('dotenv').config();
const APP_ACCESS_KEY = process.env.APP_ACCESS_KEY;
const APP_SECRET = process.env.APP_SECRET;
const CALLBACK_URL = process.env.CALLBACK_URL;
//const USER_BEARER_TOKEN = process.env.USER_BEARER_TOKEN;

module.exports = {
  unsplash: new Unsplash.default({
    applicationId: APP_ACCESS_KEY,
    secret: APP_SECRET,
    callbackUrl: CALLBACK_URL,
    //bearerToken: USER_BEARER_TOKEN
  }),
  toJson: Unsplash.toJson,
};
