var theta;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  theta = map(mouseX, 0, width, 0, PI / 2);
  translate(width / 2, height);
  branch(100, 1);
}

function branch(len, branchNum) {
  line(0, 0, 0, -len);
  translate(0, -len);

  len *= 0.66;
  if (len > 2) {
    push(); 
    rotate(theta); 
    branch(len, branchNum + 1); 
    pop(); 

    push();
    rotate(-theta);
    branch(len, branchNum + 1);
    pop();

  } 

  stroke(155, 100, 0);
  textSize(10);
  text(branchNum, 0, 0);
  
}