// code your solution here
/*
function superbowlWin(record) {
    if (["year"]["result"] === "W") {
    console.log( ["year"]["result"])
    
  }
}
record.find(superbowlWin)
*/

function superbowlWin(records) {  
  let winning = records.find(entry => entry.result === "W");

  if (winning) {
    return winning.year; // Assuming 'year' is a direct property of each object
  }
  return undefined;
}