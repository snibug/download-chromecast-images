const request = require('request');
const backgrounds = require('./backgrounds.json');
const fs = require('fs');
const URL = require('url-parse');
const _ = require('lodash');
const Download = require('download-file');


console.log({ backgrounds });

backgrounds.forEach(function (item) {
  const url = new URL(item.url);
  const { pathname } = url;
  const splitted = pathname.split('/');
  if (splitted.length === 0) {
    return;
  }

  const filename = _.last(splitted);
  const options = {
    filename,
    directory: './images',
  };

  Download(item.url, options, function(error) {
    console.error(error);
  });
});
