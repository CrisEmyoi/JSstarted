// Select the elements on the page canvas shake button
const canvas = document.querySelector(`#etch-a-sketch`);
const ctx = canvas.getContext(`2d`);
const shakeButton = document.querySelector(`.shake`);

// Setup our canvas from drawing
ctx.lineJoin = `round`;
ctx.lineCap = `round`;
ctx.lineWidht = 10;

ctx.beginPath(); // Start the drawing
ctx.moveTo(200, 200); // Start the drawing
ctx.lineTo(200, 200); // Start the drawing
ctx.stroke();

// Write a draw function

// Write a handler for the keys

// Listen for arrow keys
