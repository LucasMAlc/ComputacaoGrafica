let tree;

function setup() {
  createCanvas(600, 600);
  tree = new Tree();
}

function draw() {
  background(255);
  tree.show();
}

class Branch {
  constructor(start, end) {
    this.start = start;
    this.end = end;
    this.finished = false;
  }

  show() {
    stroke(0);
    line(this.start.x, this.start.y, this.end.x, this.end.y);
  }

  branchA(angle) {
    let dir = p5.Vector.sub(this.end, this.start);
    dir.rotate(angle);
    dir.mult(0.67);
    let newEnd = p5.Vector.add(this.end, dir);
    let b = new Branch(this.end, newEnd);
    return b;
  }

  branchB(angle) {
    let dir = p5.Vector.sub(this.end, this.start);
    dir.rotate(-angle);
    dir.mult(0.67);
    let newEnd = p5.Vector.add(this.end, dir);
    let b = new Branch(this.end, newEnd);
    return b;
  }
}

class Tree {
  constructor() {
    this.branches = [];
    this.leaves = [];
    this.iterations = 0;
    let start = createVector(width/2, height);
    let end = createVector(width/2, height-100);
    let root = new Branch(start, end);
    this.branches.push(root);

    for (let i = 0; i < 1000; i++) {
      let currentBranches = this.branches;
      this.branches = [];

      for (let j = 0; j < currentBranches.length; j++) {
        let b = currentBranches[j];
        if (!b.finished) {
          this.branches.push(b);
          let rand = random(1);
          if (rand < 0.4) {
            let branch = b.branchA(random(-PI/4, PI/4));
            this.branches.push(branch);
          } else if (rand < 0.8) {
            let branch = b.branchB(random(-PI/4, PI/4));
            this.branches.push(branch);
          } else {
            let leaf = b.end.copy();
            this.leaves.push(leaf);
          }
          b.finished = true;
        }
      }
      this.iterations++;
    }
  }

  show() {
    for (let i = 0; i < this.branches.length; i++) {
      this.branches[i].show();
    }

    for (let i = 0; i < this.leaves.length; i++) {
      fill(0, 255, 0);
      noStroke();
      ellipse(this.leaves[i].x, this.leaves[i].y, 8, 8);
    }
  }
}
