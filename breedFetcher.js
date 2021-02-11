const request = require("request");

const breedSearch = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedDescription = function (breedName, callback) {
  let link = breedSearch + breedName;

  request(link, function (error, response, body) {
    console.log(body);
    if (error || body.length === 0) {
      return callback(error, null);
    } else {
      let data = JSON.parse(body);
      let desc = data[0].description;
      return callback(null, desc);
    }
  });
};

module.exports = fetchBreedDescription;
