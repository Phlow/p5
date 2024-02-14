var canvas;
let threads = [];

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style('z-index', '-1');
	for(let i=0; i<40; i++){
		let len = random(0.1, 0.9)*width;
		let x1 = randomGaussian(0.5, 0.12) * width;
		let y1 = randomGaussian(0.5, 0.12) * height;
		let x2 = x1 + len * (int(random(3))-1);
		let y2 = y1 + len * (int(random(3))-1);
		threads.push(new Thread(x1, y1, x2, y2));
	}
}

function draw() {
	background(20,25,31);
	for(let t of threads){
		t.run();
	}
}

function easeInOutQuart(x){
	return x < 0.5 ? 8 * x * x * x * x : 1 - pow(-2 * x + 2, 4) / 2;
}

class Thread{
	constructor(x1, y1, x2, y2){
		this.x1 = x1;
		this.y1 = y1;
		this.x2 = x2;
		this.y2 = y2;
		this.t = 0;
		this.init();
		this.balls = [];
	}

	run(){
		stroke(38,127,181, 100);
		line(this.x1, this.y1, this.x2, this.y2);
		if (this.t % this.tt == 0) {
			this.balls.push(new Ball(this.x1, this.y1, this.x2, this.y2));
			this.init();
		}
		for (let b of this.balls) {
			b.show();
			b.move();
		}

		for (let i = 0; i < this.balls.length; i++) {
			if (this.balls[i].isDead) {
				this.balls.splice(i, 1);
			}
		}
		this.t++;
	}
	
	init(){
		this.tt = int(random(50, 500));
	}
}


class Ball{
	constructor(x1, y1, x2, y2){
		this.p1 = createVector(x1, y1);
		this.p2 = createVector(x2, y2);
		this.p = createVector(x1, y1);
		this.d = 0;
		this.maxD = random(5, 30);
		this.isDead = false;
		this.dst =  p5.Vector.dist(this.p1, this.p2);
		this.span =  int(random(0.25, 1) * this.dst);
		this.t = 0;
	}

	show(){
		fill(255,178,13);
		stroke(0);
		circle(this.p.x, this.p.y, this.d);
	}

	move(){
		let nrm = norm(this.t, 0, this.span);
		this.p = p5.Vector.lerp(this.p1, this.p2, easeInOutQuart(nrm));
		this.d = lerp(0, this.maxD, sin(nrm*PI));
		if(this.t > this.span)this.isDead = true;

		this.t ++;
	}
}