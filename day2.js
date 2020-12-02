const json = require('day2.json'); 

//answer for part 1
let count = 0
json.forEach(x => {
    let min =  x.range[0]
    let max = x.range[1]
    let counted = x.letter
    let string = x.string
    let occurence = string.split(counted).length-1
    if (occurence >= min && occurence <= max) {
        count ++
    }
});

console.log("answer 1: " + count)

//answer for part 2
let count2 = 0

json.forEach(x => {
    let first =  x.range[0]-1
    let next = x.range[1]-1
    let checkedletter = x.letter
    let string = x.string
    if (string[first] === checkedletter && string[next] !== checkedletter) {
        count2 ++
    }
    if (string[first] !== checkedletter && string[next] === checkedletter ){
        count2 ++
    }
})

console.log("answer 2: " + count2)
