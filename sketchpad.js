// Variables for referencing the canvas and 2dcanvas context
var canvas,ctx;

// Variables to keep track of the mouse position and left-button status 
var mouseX,mouseY,mouseDown=0;

// Variables to keep track of the touch position
var touchX,touchY;

//Threshold for black
var THRESHOLD = 100;

//Current letter holder
var curLetter = "alef";

//Audio for Good Job, Try Again, and Instructions
var audioGJ = new Audio('goodjob.mp3');
var audioTA = new Audio('oopstryagain.mp3');
var audioIN = new Audio('instructions.mp3');
var audioWel = new Audio('welcome.mp3');

// Draws a dot at a specific position on the supplied canvas name
// Parameters are: A canvas context, the x position, the y position, the size of the dot
function drawDot(ctx,x,y,size) {
	// Let's use black by setting RGB values to 0, and 255 alpha (completely opaque)
	r=0; g=0; b=255; a=255;

	// Select a fill style
	ctx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";

	// Draw a filled circle
	ctx.beginPath();
	ctx.arc(x, y, size, 0, Math.PI*2, true); 
	ctx.closePath();
	ctx.fill();
} 

// Clear the canvas context using the canvas width and height
function clearCanvas(canvas,ctx) {
	var fn = letters[curLetter];
	fn(canvas,ctx);
}

// Button that plays instruction audio
function instruct() {
	audioIN.play();
	console.log("hey");
}

// Submit the drawing for check
function submitCanvas(canvas, ctx) {
	var correct = true;
	
	var drawnCanvas = ctx.getImageData(0,0,canvas.width,canvas.height);
	//var drawnCanvas2 = canvas.toDataURL("image/png"); // Turn drawn things into a png
	
	//var imageElement = document.getElementById("MyPix");  // Get the img element object in HTML also called test screen
	//imageElement.src = drawnCanvas2; // Paste it onto the test screen
	
	console.log(canvas.width + " by " + canvas.height + " total pix: " + canvas.width * canvas.height);
	var num = 0;
	for (var i = 0; i < drawnCanvas.data.length; i+=4) {
		if(drawnCanvas.data[i] <= THRESHOLD & drawnCanvas.data[i+1] <= THRESHOLD & drawnCanvas.data[i+2] <= THRESHOLD) {
			num+= 1;
			console.log(num + "Found black!");
		}
		
		if(num>75) {
			correct = false;
		}
	}
	
	if (correct == false) {
		audioTA.play();
		alert("Try Again.");
		clearCanvas(canvas,ctx);
	}
	else {
		audioGJ.play();
		alert("Good Job! Click on the next letter you want to try.");
	}
}

// Keep track of the mouse button being pressed and draw a dot at current location
function sketchpad_mouseDown() {
	mouseDown=1;
	drawDot(ctx,mouseX,mouseY,12);
}

// Keep track of the mouse button being released
function sketchpad_mouseUp() {
	mouseDown=0;
}

// Kepp track of the mouse position and draw a dot if mouse button is currently pressed
function sketchpad_mouseMove(e) { 
	// Update the mouse co-ordinates when moved
	getMousePos(e);

	// Draw a dot if the mouse button is currently being pressed
	if (mouseDown==1) {
		drawDot(ctx,mouseX,mouseY,12);
	}
}

// Get the current mouse position relative to the top-left of the canvas
function getMousePos(e) {
	if (!e)
		var e = event;

	if (e.offsetX) {
		mouseX = e.offsetX;
		mouseY = e.offsetY;
	}
	else if (e.layerX) {
		mouseX = e.layerX;
		mouseY = e.layerY;
	}
 }

// Draw something when a touch start is detected
function sketchpad_touchStart() {
	// Update the touch co-ordinates
	getTouchPos();

	drawDot(ctx,touchX,touchY,12);

	// Prevents an additional mousedown event being triggered
	event.preventDefault();
}

// Draw something and prevent the default scrolling when touch movement is detected
function sketchpad_touchMove(e) { 
	// Update the touch co-ordinates
	getTouchPos(e);

	// During a touchmove event, unlike a mousemove event, we don't need to check if the touch is engaged, since there will always be contact with the screen by definition.
	drawDot(ctx,touchX,touchY,12); 

	// Prevent a scrolling action as a result of this touchmove triggering.
	event.preventDefault();
}

// Get the touch position relative to the top-left of the canvas
// When we get the raw values of pageX and pageY below, they take into account the scrolling on the page
// but not the position relative to our target div. We'll adjust them using "target.offsetLeft" and
// "target.offsetTop" to get the correct values in relation to the top left of the canvas.
function getTouchPos(e) {
	if (!e)
		var e = event;

	if(e.touches) {
		if (e.touches.length == 1) { // Only deal with one finger
			var touch = e.touches[0]; // Get the information for finger #1
			touchX=touch.pageX-touch.target.offsetLeft;
			touchY=touch.pageY-touch.target.offsetTop;
		}
	}
}

// Set-up the canvas and add our event handlers after the page has loaded
function init() {
	// Get the specific canvas element from the HTML document
	canvas = document.getElementById('sketchpad');

	// If the browser supports the canvas tag, get the 2d drawing context for this canvas
	if (canvas.getContext)
		ctx = canvas.getContext('2d');

	// Check that we have a valid context to draw on/with before adding event handlers
	if (ctx) {
		// Draw the color white all over the canvas
		ctx.fillStyle = "#FFFFFF";
		ctx.fillRect(0,0,canvas.width,canvas.height);
		
		// React to mouse events on the canvas, and mouseup on the entire document
		canvas.addEventListener('mousedown', sketchpad_mouseDown, false);
		canvas.addEventListener('mousemove', sketchpad_mouseMove, false);
		window.addEventListener('mouseup', sketchpad_mouseUp, false);

		// React to touch events on the canvas
		canvas.addEventListener('touchstart', sketchpad_touchStart, false);
		canvas.addEventListener('touchmove', sketchpad_touchMove, false);
	}
	
	audioWel.play();
}