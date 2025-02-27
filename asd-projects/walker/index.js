/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;


  const KEY = {
    LEFT: 37,
    RIGHT: 38,
    UP: 39,
    DOWN: 40,
    ENTER: 13,
  };

  var walker = {
    positionX: 0,
    positionY: 0,
    speedX: 0,
    speedY: 0,
  };
  // Game Item Objects

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL); // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on("keydown", handleKeyDown); // change 'eventType' to the type of event you want to handle
  $(document).on("keyup", handleKeyUp); 
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    wallCollision();
    redrawGameItem();
    
  }

  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.DOWN) {
      console.log("down pressed");
      walker.speedY = 5;
    }
    if (event.which === KEY.UP) {
      console.log("up pressed");
      walker.speedX = 5;
    }
    if (event.which === KEY.RIGHT) {
      console.log("right pressed");
      walker.speedY = -5;
    }
    if (event.which === KEY.LEFT) {
      console.log("left pressed");
      walker.speedX = -5;
    }
    if (event.which === KEY.ENTER) {
      console.log("enter pressed");
    } 
  }

  function handleKeyUp(event) {
    if (event.which === KEY.DOWN) {
      console.log("down released");
      walker.speedY = 0;
    }
    if (event.which === KEY.UP) {
      console.log("up released");
      walker.speedX = 0;
    }
    if (event.which === KEY.RIGHT) {
      console.log("right released")
      walker.speedY = 0;
    }
    if (event.which === KEY.LEFT) {
      console.log("left released")
      walker.speedX = 0;
    }
    if (event.which === KEY.ENTER) {
      console.log("enter released");
    } 
  }
  

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function repositionGameItem() {
    walker.positionX += walker.speedX; // update the position of the box along the x-axis
    walker.positionY += walker.speedY; // update the position of the box along the y-axis
  }
  
  function redrawGameItem() {
    $("#walker").css("left", walker.positionX + "px"); 
    $("#walker").css("top", walker.positionY + "px"); 
    }

    function wallCollision() {
      if(walker.positionY < 0) {
        walker.positionY -= walker.speedY;
      }
      
      if(walker.positionX < 0) {
        walker.positionX -= walker.speedX;
      }
      
      if(walker.positionY > $("#board").height()-45) {
        walker.positionY -= walker.speedY;
      }

      if(walker.positionX > $("#board").width()- 45 ) {
        walker.positionX -= walker.speedX;
      }

    } 
    
    
    

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

}
