class Robot {
	//your solution here
  constructor(){
    this.coordinates = [0,0];
    this.bearing = 'north';
  };

  setCoordinates(n1,n2){
    this.coordinates = [n1,n2];
  };

  setBearing(facing){
    const directions = ["north", "south", "east", "west"];
    let n = directions.indexOf(facing);
    if (n < 0){ throw "Invalid Robot Bearing"}
    else{ this.bearing = facing; }
  };

  place(obj){
    this.setCoordinates(obj['x'],obj['y']);
    this.setBearing(obj['direction'])
  };

  turnRight(){
    const directions = ["north", "east","south",  "west"];
    let current = directions.indexOf(this.bearing);
    if (current === 3){ current = 0;}
    else { current++;}
    this.setBearing(directions[current]);
  };

  turnLeft(){
    const directions = ["north", "east","south",  "west"];
    let current = directions.indexOf(this.bearing);
    if (current === 0){ current = 3;}
    else { current--;}
    this.setBearing(directions[current]);
  };

  advance(){
    
  }

}
