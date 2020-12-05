const input = require("fs").readFileSync("day5.txt").toString().split("\n")
//console.log(input)

let minRow = 0
let maxRow = 127

let minCol = 0
let maxCol = 7

let finalRow = 0
let finalCol = 0

let id = 0 
let maxId = 0
let idArray = []

function halvingRow(x){
    if (x=== "F"){
        maxRow = (((maxRow - minRow) - 1) / 2) + minRow
    }else{
        minRow = ((((maxRow - minRow) - 1) / 2) + minRow) + 1
    }
    //console.log("reducing row range for " + x)
    //console.log(minRow, maxRow)
}

function halvingColumn(x){
    if (x === "L"){
        maxCol = (((maxCol - minCol) - 1) / 2) + minCol
    }else{
        minCol = ((((maxCol - minCol) - 1) / 2) + minCol) + 1
    }
    //console.log("reducing col range for " + x)
    //console.log(minCol, maxCol)
}

input.forEach( x => {
    finalRow = 0
    finalCol = 0

    minRow = 0
    maxRow = 127

    minCol = 0
    maxCol = 7

    for (var i = 0; i < 10; i++) {
        if (i < 6){
            halvingRow(x.charAt(i));
        }else if (i===6) {
            if (x.charAt(i) === "F"){
                //console.log("the final row is " + minRow)
                finalRow = minRow  
            } else {
                finalRow = maxRow
                //console.log("the final row is " + maxRow)
            }                 
        }else if (i > 6 && i < 9){
          halvingColumn(x.charAt(i));
        } else if (i===9) {
                if (x.charAt(i) === "L"){
                    finalCol = minCol                      
                } else {
                    finalCol = maxCol
                }
        }

    }
    id = (finalRow * 8) + finalCol
    //console.log(finalRow, finalCol, id)
    if (id > maxId){
        maxId = id
    }
    idArray.push(id);   
    }
)
console.log("the max id is " + maxId)
let sorted = idArray.sort(function(a, b) {
    return a - b;
  }
)

let missing = []

for (var i = 11; i <= sorted.length; i++) {
    if (sorted.indexOf(i) == -1) {
      missing.push(i);
    }
  }
console.log("my id is: " + missing)