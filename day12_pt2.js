const input = require("fs").readFileSync("day12.txt").toString().split("\n")

//store directions as index
const cardinalDirections = ["N", "E", "S", "W"]

//create move log
const moves = []

// create ship as object, properties as state
let ship = {
  facing: "E", //E
  y : 0
  x : 0
}

let waypoint = {
  y: 1
  x : 10,
}




//rotate the waypoint around the ship
function rotate(degrees, waypoint, ship) {
  //4,3,2,1 or -1,-2,-3,-4
  let turns = degrees/90
  //right
  if (turns > 0 ) { 
    switch(turns){
      case 1:
        waypoint.south = waypoint.north
        waypoint.north = 0
        break;
      case 2:
        
        break;
      case 3:
        break;
    }
  } 
  //left
  else { 
    
  }

}

//move the ship to the waypoint
function moveToWaypoint(times) {}


