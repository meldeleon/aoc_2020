const { get } = require("http")

const input = require("fs").readFileSync("day7.txt").toString().split("\n")

//console.log(input)

//format the input, create new array of "container" > "contains" 
let containerObjectsArray = input.map( sentence => {
    let splitByContain = sentence.split("contain")
    let outerBag = splitByContain[0].replace(/s\s+$/, "")
    let innerBags = splitByContain[1].split(",")
    innerBags = innerBags.map(x=> {
        let xFixed = x.replace(/s+$/, "").replace(/(s\.)+$/, "").replace(/^\s+/, "").replace(/\.+$/,"")
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
}

//count all
let setCheckedList = new Set(checkedList)
let total = setCheckedList.size - 1
console.log("solution #1:" + total)


//solution 2
function getContained(container){
    let containedBagArray = []
    containerObjectsArray.forEach( x => {
        if (x.name.includes(container)){
            containedBagArray = containedBagArray.concat(x.contains)
        }
        else {}
    })
    return containedBagArray
}

let toCheckList2 = ["1 shiny gold bag"]
let checkedList2 = []
let totalBags = 0

while (toCheckList2.length > 0) {
    let currentBag = toCheckList2.pop()
    console.log("current bag:" + currentBag)
    let checkModifier = currentBag.match(/^[0-9]+/)
    bagName = currentBag.match(/(?<=\s)(.*)$/)[0]
    console.log(bagName)
    console.log("check modifier: " + checkModifier)
    if (!isNaN(checkModifier)){
        let containerModifier = checkModifier;
        let containedList = getContained(bagName);
        console.log("contained list:" + containedList)
        containedList.forEach( x =>{
            let modifier = parseInt(x[0])
            if (isNaN(modifier)){
                return
            }
            let modifierXModifier = containerModifier * modifier
            let modifiedCheckBag = x.replace(modifier, modifierXModifier) 
                console.log("modified check bag: " + modifiedCheckBag)
                totalBags += modifierXModifier
                console.log("adding "+ modifierXModifier +" to running total")
            if(!checkedList.includes(x)){   
                toCheckList2.push(modifiedCheckBag)
                  
            }
        })
        checkedList2.push(currentBag)
    }
    
}
    
console.log("solution #2:" + totalBags)
