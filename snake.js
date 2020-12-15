"use strict"; // for future-proof error-fixing

ar canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var width = canvas.width; // Setting the width to the canvas width
var height = canvas.height; // Setting the height to the canvas height
var snake = new Snake(400, 200);
var food = new Food(); 

var Top = new HoriBoundaries(0, 1); // Declaring the top rectangle as a boundary object
var Bottom = new HoriBoundaries(0, 395); // Declaring the bottom rectangle as a boundary object
var Right = new VertBoundaries(10, 0);
var Left = new VertBoundaries(780, 0); 

function HoriBoundaries(x_position, y_position) {
    this.width = 800; // Width in pixels
	this.height = 5; // Height in pixels
	this.x_position = x_position; // Position in pixels
	this.y_position = y_position; // Position is pixels
}

HoriBoundaries.prototype.render = function(){
    context.fillRect(this.x_position, this.y_position, this.width, this.height); // Draw boundary
}

function VertBoundaries(x_position, y_position) {
    this.width = 5; // Width in pixels
	this.height = 400; // Height in pixels
	this.x_position = x_position; // Position in pixels
	this.y_position = y_position; // Position is pixels
}

VertBoundaries.prototype.render = function(){
    context.fillRect(this.x_position, this.y_position, this.width, this.height); // Draw boundary
}

function render() {
	
}

function update() {
	
}

function keyboard_input(event) {
	
}

window.addEventListener("keydown", keyboard_input); // listen to keyboard button press

// main game loop
var previous; 
function main(timestamp){
	if (!previous) previous = timestamp; //start with no elapsed time
  	var t_elapsed = (timestamp - previous) / 1000;  //work out the elapsed time
  	update(t_elapsed); //update the game based on elapsed time
  		
  	render()
	
  	previous = timestamp;  //set the previous timestamp ready for next time
  	window.requestAnimationFrame(main); //ask browser to call this function again, when it's ready
}

main() // Calling for the main lopp function so that the code can use it
window.requestAnimationFrame(main) // Calling so the framerate can be updated to allow for movement
