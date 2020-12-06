const { group } = require("console")

const input = require("fs").readFileSync("day6.txt").toString().split("\n\n")

//solution 1
const plane = input.map( x=> {
    let group = x.split("\n").map( y => {
        let person = y
        return person
    })
    return group
})

//console.log(plane)

//remove uniques
const uniquePlaneGroups = plane.map(currentGroup =>{
    let flattenedGroup = currentGroup.flatMap(currentPerson => {
        return currentPerson.split("")
        
    })
    let setGroup = new Set(flattenedGroup)
    return [...setGroup]
})

//console.log(uniquePlaneGroups)

//count the group total
const groupTotalArray = uniquePlaneGroups.map( currentGroup => {
    return currentGroup.length
})
//find the final total of plane
const reducer = (a, b) => a + b
let total = groupTotalArray.reduce(reducer)
console.log("answer #1 is:" + total)

//solution 2
console.log(plane)


// find common value for all groups

const commonValuePlane = plane.map(currentGroup =>{
    //
    let flattenedGroup = currentGroup.flatMap(currentPerson => {
        return currentPerson.split("")
        
    })
    let uniqueGroup = [...new Set(flattenedGroup)]
    let commonValues = []
    uniqueGroup.forEach( answer => {
        let count = 0
        currentGroup.forEach( currentPerson => {
            if (currentPerson.includes(answer)){
                count ++
                //console.log("answer found, count: "+count)
            }
        })
        if (count === currentGroup.length){
            //console.log(count + currentGroup.length)
            commonValues.push(answer);
        }else {
            return;
        }
    })
    return commonValues;
})
//console.log(commonValuePlane)

const groupCommonAnswerTotalArray = commonValuePlane.map( currentGroup => {
    return currentGroup.length
})

let total2 = groupCommonAnswerTotalArray.reduce(reducer)
console.log("answer #2 is:" + total2)
