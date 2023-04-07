function setup() {
  var msg = createP('Clique para gerar uma nova árvore');
  msg.position(10,10);
  createCanvas(400, 400);
}

function draw() {
  background(255);
  translate(width/2, height);
  branch(100);
  noLoop();
}

function mousePressed() {
  redraw();
}

function branch(len) {
  strokeWeight(len/10);
  
  line(0, 0, 0, -len);
  translate(0, -len);

  if (len > 2) {
    let n = int(random(1, 4));
    for (let i = 0; i < n; i++) {
      let theta = random(-PI/2, PI/2);
      push();
      rotate(theta);
      branch(len * 0.67);
      pop();
    }
  }
}
