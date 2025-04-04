// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
applyFilterNoBackground(reddify);
  

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction) {
  for (let r = 0; r < image.length; r++) {
  var row = image[r];
for(let c = 0; c < row.length; c++) {
  var rgbString = row[c];
var rgbNumbers = rgbStringtoArray(rgbString);
filterFunction(rgbNumbers);
rgbString = rgbArrayToString(rgbNumbers);
row[c] = rgbString;
   } 
  }
}


// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {
var backgroundColor = image[0][0]; 
 if(image[r][c] === backgroundColor) {

for (let r = 0; r < image.length; r++) {
    var row = image[r];
  for(let c = 0; c < row.length; c++) {
    var rgbString = row[c];
  var rgbNumbers = rgbStringtoArray(rgbString);
  filterFunction(rgbNumbers);
  rgbString = rgbArrayToString(rgbNumbers);
  row[c] = rgbString;
       }
    }
  }
}

// TODO 5: Create the keepInBounds function
function keepInBounds(number) {
  return (number < 0 || number > 255 ? 0 || 255 : number);
} 


// TODO 3: Create reddify function
function reddify(redAmount) {
  rgbNumbers[RED] = 200; 
}

// TODO 6: Create more filter functions
function decreaseBlue(rgbBlue) {
 rgbBlue = keepInBounds(rgbNumbers[BLUE] - 50);
}

function increaseGreenByBlue(rgbGreen) {
rgbGreen = keepInBounds(rgbNumbers[BLUE] + rgbNumbers[GREEN]);
}

// CHALLENGE code goes below here
