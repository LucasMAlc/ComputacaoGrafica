function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  translate(width/2, height);
  branch(100);
  noLoop();
}

function branch(len) {
  strokeWeight(len/5);
  line(0, 0, 0, -len);
  translate(0, -len);

  if (len > 2) {
    // Call branch() a random number of times.
    let n = int(random(1, 4));
    for (let i = 0; i < n; i++) {
      // Each branch gets its own random angle.
      let theta = random(-PI/2, PI/2);
      push();
      rotate(theta);
      branch(len * 0.67);
      pop();
    }
  }
}
