const input = require("fs").readFileSync("day04.txt").toString().split("\n\n")
let objectArray = input.map( x=> {
    let record = {}
    x.split(/\s/).forEach( y => {
        let kv = y.split(":")
        record[kv[0]] = kv[1];
    })
    return record;
})

//answer 1
let validRecord = 0
objectArray.forEach( x => {
    let keysNumber = Object.keys(x).length
    if( keysNumber === 8){
        validRecord ++
    } else if (keysNumber === 7 && x['cid'] === undefined ){
        validRecord ++

    }
})
console.log("valid records: "+validRecord)


//answer 2
let validRecord2 = 0

objectArray.forEach( x => {
    let keysNumber = Object.keys(x).length
    if( keysNumber === 8 && validCheck(x)=== true){
        validRecord2 ++
    } else if (keysNumber === 7 && x['cid'] === undefined && validCheck(x)=== true){
        validRecord2 ++
    }
})

console.log("valid records 2: " +validRecord2)

function heightCheck(hgt){
    let hgtVal = hgt.replace("in", "").replace("cm", "")
    if (hgt.match("cm") === null && hgtVal >= 59 && hgtVal <= 76){
        return true;
    } else if (hgt.match("in") === null && hgt.substring(0,3) >= 150 && hgt.substring(0,3) <= 193){
        return true;
    } else {
        return false
    }
}


function checkEcl(ecl) {
    switch (ecl) {
        case "amb":
        case "blu":
        case "brn":
        case "gry":
        case "grn":
        case "hzl":
        case "oth":
            return true
            break;
        default:
            return false
    }
}



function validCheck(currentObj){
    let { byr, iyr, eyr, hgt, hcl, ecl, pid } = currentObj
    if (byr.length === 4 && byr >= 1920 && byr <= 2002 && 
        iyr.length === 4 && iyr >= 2010 && iyr <= 2020 &&
        eyr.length === 4 && eyr >= 2020 && eyr <= 2030 &&
        heightCheck(hgt) &&
        hcl.match(/^#[a-f0-9]{6}$/) &&
        checkEcl(ecl) &&
        pid.match(/^[0-9]+$/) && pid.length === 9){
        return true;
    }
        else {
            return false
        }
}
