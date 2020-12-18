const input = require("fs").readFileSync("day12.txt").toString().split("\n");

functon dbg(text,1,2,3,4){
    console.log(text ": " 1,2,3,4,);
}

//console.log(input);

const moves = []

let ship = {
    facing: "east",
    north: 0,
    south: 0,
    east: 0,
    west: 0,

}

function directio

function moveShip(command){
    let prefix = command.match(/^[A-Z]/)
    let distance = comand.match(/[0-9].*/)
    if (prefix === "N" || prefix === "E" || prefix === "S" || prefix === "W"){

    }

}


Action N means to move north by the given value.
Action S means to move south by the given value.
Action E means to move east by the given value.
Action W means to move west by the given value.
Action L means to turn left the given number of degrees.
Action R means to turn right the given number of degrees.
Action F means to move forward by the given value in the direction the ship is currently facing.