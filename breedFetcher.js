const request = require('request');
var http = require('http');
var fs = require('fs');



const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if( body === "[]") {
      let errorMsg = "Enter a valid Breed name";
      console.log(errorMsg);
      return errorMsg;
    }
    // if(error) {
    //   console.log("This is the detail of error:\n")
    //   throw (err);
    //   //console.log('error:', error);
    // }
  // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  //fs.writeFile('./Cat.txt', body);
  //console.log(typeof body);
  console.log("*****************************************");
  const data = JSON.parse(body);

  callback(error, data);
});





};

  
module.exports = { fetchBreedDescription };






// const fs = require('fs');

// const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
//   console.log('breedDetailsFromFile: Calling readFile...');
//   fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
//     // CHANGE: Pass data into callback instead of returning it directly
//     console.log("In readFile's Callback: it has the data.");
//     if (!error) functionToRunWhenThingsAreDone(data);
//   });
// };

// // CHANGE 1: Moved the console.log into a new function:
// const printOutCatBreed = breed => {
//   console.log('Return Value: ', breed) // => print out details correctly.
// };

// // CHANGE 2: we're now passing two arguments into breedDetailsFromFile: breed string and a callback function
// breedDetailsFromFile('Bombay', printOutCatBreed);