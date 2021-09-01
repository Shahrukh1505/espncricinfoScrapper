const request = require('request');
const cheerio = require('cheerio');

request('https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard', cb);
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

    let bowlerTableArr = selectorTool('.card.content-block.match-scorecard-table .table.bowler');

    let hwtPlayer = "";
    let now = 0;
    for(let i = 0;i < bowlerTableArr.length;i++){
        let bowlerTable = selectorTool(bowlerTableArr[i]).html(); //brings the html of the two tables
        let allBowlers = selectorTool(bowlerTable).find("tbody>tr"); //finds the row of each bowler
        // console.log(allBowlers.length); both table lengths
        // console.log(bowlerTable);
    for(let j = 0;j< allBowlers.length;j++){
        let colOfEachPlayerArr = selectorTool(allBowlers[j]).find("td");
        // console.log(colOfEachPlayerArr.length); //brings number of columns in each row
    let playerName = selectorTool(colOfEachPlayerArr[0]).text(); //player name present at first index

    let currNumOfWickets = selectorTool(colOfEachPlayerArr[4]).text(); //player wickets present at fifth index
    if(colOfEachPlayerArr.length == 1){ //empty rows that's why
        continue;
    }
    if(currNumOfWickets > now){
        now = currNumOfWickets; //3
        hwtPlayer = playerName; // trent boult
    }
    
    
    
    }
    
    }
    console.log("Highest Wicket Taking Player id:" + hwtPlayer);
    console.log("Number of Wickets :" + now);
    
}