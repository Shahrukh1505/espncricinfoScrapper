const request = require('request');
const cheerio = require('cheerio');

request('https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary'
, cb);
function cb(error, response, html) {
  if(error){
    console.error('error:', error); // Print the error if one occurred
  }
  else{
  extractHTML(html); // Print the HTML for the Google homepage.
  }
};

function extractHTML(html){
    let selectorTool = cheerio.load(html); //loads the html element

    // let statsArr = selectorTool('div [itemprop = "articleBody"]>p'); //class name of those element divs
    let statsArr = selectorTool('.match-comment-wrapper'); //this reads this class elements
   
let data = selectorTool(statsArr[0]).text(); //wrap inside selector tool
console.log(data);
    
}
