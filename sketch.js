function setup() {
    createCanvas(600, 600);
    background("green");
  }
  
  function draw() {
    stroke("yellow");
    fill("red");
  
    // console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 15, 20
          );
    }
  }
  