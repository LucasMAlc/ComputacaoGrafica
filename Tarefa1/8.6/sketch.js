var theta;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  theta = map(mouseX, 0, width, 0, PI / 2);
  translate(width / 2, height);
  stroke(255);
  branch(120, 1);
}

function branch(len, branchNum) {
  strokeWeight(2);

  line(0, 0, 0, -len);
  translate(0, -len);

  len *= 0.66;
  if (len > 2) {
    push(); // Save the current state of transformation (i.e. where are we now)
    rotate(theta); // Rotate by theta
    branch(len, branchNum + 1); // Ok, now call myself to draw two new branches!!
    pop(); // Whenever we get back here, we "pop" in order to restore the previous matrix state

    // Repeat the same thing, only branch off to the "left" this time!
    push();
    rotate(-theta);
    branch(len, branchNum + 1);
    pop();
  } 

  // Draw branch number at the end of each branch
  stroke(255, 0, 0);
  textSize(10);
  text(branchNum, 0, 0);
}
