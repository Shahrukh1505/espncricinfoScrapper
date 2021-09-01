const request = require('request');
const cheerio = require('cheerio');

request('https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/live-cricket-score', cb);


function cb(error, response, html) {
  if(error){
    console.error('error:', error); // Print the error if one occurred
  }
  else{
  extractHTML(html);
  }
};

function extractHTML(html){
    let selectorTool = cheerio.load(html); //loads the html element

    let name = selectorTool('.best-player-name>a').text();
    console.log(name);
    
}

