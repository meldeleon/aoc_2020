const input = require("fs").readFileSync("day8.txt").toString().split("\n")


let executed = new Array(input.length)
let accumulator = 0
let loopNumber = 0

function executeOrder (commandType, commandIndex, argument) {
    loopNumber++
    console.log("===== LOOP START NUMBER " + loopNumber + "=====")
    let currentCommand = input[commandIndex]
    let nextIndex = commandIndex + 1
    console.log("next index: " + nextIndex)
    let nextCommand = input[nextIndex]
    let nextType = nextCommand.substring(0,3)
    let nextArgument = nextCommand.match(/(?<=\s).*$/)[0]
    //console.table(executed)
    if (executed[commandIndex] !== currentCommand ){       
        console.log("command index: " + commandIndex)
        console.log("argument: "+ argument)
        console.log("next parameters: " + nextType + nextArgument)
        console.log("executed " + commandType + " " + argument + " at " + commandIndex)
        executed.splice(commandIndex, 1, currentCommand)
        if (commandType === "acc") {
            accumulator = accumulator + parseInt(argument)
            console.log("accumulator is " + accumulator)
            executeOrder(nextType, nextIndex, nextArgument)
        }
        else if (commandType === "jmp") {
            let jumpedIndex = commandIndex + parseInt(argument)
            console.log("jumped index: " + jumpedIndex)
            let jumpedCommand = input[jumpedIndex]
            let jumpedType = jumpedCommand.substring(0,3)
            let jumpedArgument = jumpedCommand.match(/(?<=\s).*$/)[0]
            executeOrder(jumpedType, jumpedIndex, jumpedArgument)
        } else {
            //do nothing
            executeOrder(nextType, nextIndex, nextArgument)
        }
    }else {
        console.log("looped once")
        console.log("final accumulator: " + parseInt(accumulator))
        return;
    }
}

executeOrder("nop",0,0)