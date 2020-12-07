const input = require("fs").readFileSync("day7.txt").toString().split("\n")

//console.log(input)

let containerObjectsArray = input.map( sentence => {
    let splitByContain = sentence.split("contain")
    let outerBag = splitByContain[0].replace(/s\s+$/, "")
    let innerBags = splitByContain[1].split(",")
    innerBags = innerBags.map(x=> {
        let xFixed = x.replace(/s+$/, "").replace(/(s\.)+$/, "").replace(/^\s+/, "")
        return xFixed
    })
    //console.log(outerBag)
    //console.log(innerBags)
    let containerObj = {
        name: outerBag,
        contains: innerBags
    }
    return containerObj

})
console.table(containerObjectsArray)

//reducer
const reducer = (a, b) => a + b

function getContainer(target) {
    let containsTargetBagArray = containerObjectsArray.map( x => {
        let numberOfTargetBagsContainedArray = x.contains.map( y => {
            if (y.includes(target)){
                return parseInt(y[0])
            } else {
                return 0
            }
        })
        let numberOfTargetBagsContained = numberOfTargetBagsContainedArray.reduce(reducer)
        let containsTargetBags = {
            name: x.name,
            targetBagsContained: numberOfTargetBagsContained
        }
        return containsTargetBags
    })
    return containsTargetBagArray
}

//solution 1
//create list of bags to check for containers
let toCheckList = ["shiny gold"]

//create list of bags that have been checked
let checkedList = []



while (toCheckList.length > 0){
    let currentBag = toCheckList.pop()
    let containerList =  getContainer(currentBag)
    containerList.forEach(y =>{
        if (y.targetBagsContained > 0 && !checkedList.includes(y.name)){
            toCheckList.push(y.name);
        } 
    })
    checkedList.push(currentBag)
    console.log("TO CHECK:" + toCheckList);
    console.log("CHECKED:" +checkedList);

}

//count all
let total = checkedList.length - 1
console.log("solution #1:" + total)