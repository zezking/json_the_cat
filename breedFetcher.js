// const fs = require("fs");
const request = require("request");
// const readline = require("readline");
const breedSearch = "https://api.thecatapi.com/v1/breeds/search?q=";
let link = breedSearch + process.argv.slice(2);

request(link, function (error, response, body) {
  let data = JSON.parse(body);
  if ((error && response.statusCode == 200) || data.length === 0) {
    console.log("Ooops cats did not exist!");
    console.log(error);
  }

  console.log(data[0].description);
});
