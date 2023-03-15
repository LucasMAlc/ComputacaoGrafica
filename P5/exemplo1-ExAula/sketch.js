let radius = 200;
let n = 4;

function setup() {
    createCanvas(800,600);
}  

function draw() {
    background(200);
    translate(width/2,height/2);
    let [mx,my] = relativeMouse();
    let v = createVector(1,0);
    let u = createVector(mx,my);
    rotate(v.angleBetween(u));
    n = floor(map(u.mag(),0,width/2,4,12));
    beginShape();
    for(let i=0; i<2*n; i++) {
        let angle = map(i,0,2*n,0,TWO_PI);
        if (i % 2 == 0) {
            vertex(radius*cos(angle), radius*sin(angle));
        }else{
            vertex(radius/2*cos(angle), radius/2*sin(angle));
        }
    }
    endShape(CLOSE);
}

function relativeMouse() {
    let mx = mouseX;
    let my = mouseY;
	let matrix = drawingContext.getTransform();
	let pd = pixelDensity();
    let rp = matrix.inverse().transformPoint(new DOMPoint(mx * pd,my * pd));
    return [ rp.x, rp.y ];
}
