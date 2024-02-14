let fCount = 1
let grow = 0
let growSpeed = .04

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function setup() {
  createCanvas(1080, 720, WEBGL);
  angleMode(DEGREES);

  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, -100);
  canvas.style("z-index", "-1");
}

function draw() {
  background("#14191f");

  rotateX(frameCount/2);
  rotateY(frameCount/8);
  if ( grow > 20 || grow < 0) {
    growSpeed = growSpeed * -1
  }
  grow = grow + growSpeed;
  

  noFill();

  for (var i = 0; i < 50; i++) {
    rotate(frameCount / 60);

    beginShape();
    for (var j = 0; j < 360; j += 60) {
      var rad = i * grow;
      var x = rad * cos(j);
      var y = rad * sin(j);
      var z = sin(frameCount * 2 + i * 5) * 50;

      stroke("#ff410d");
      vertex(x, y, z);

      stroke("#ffB20d");
      // vertex(x * 0.8, y * 0.8, z * 0.8);
    }
    endShape(CLOSE);
  }
}
function keyPressed() {
  if (key === " ") {
    // Überprüft, ob die Leertaste gedrückt wurde
    let now = new Date();
    let year = now.getFullYear();
    let month = String(now.getMonth() + 1).padStart(2, "0"); // Monat von 0-11, daher +1 und führende Nullen hinzufügen
    let day = String(now.getDate()).padStart(2, "0");
    let hours = String(now.getHours()).padStart(2, "0");
    let minutes = String(now.getMinutes()).padStart(2, "0");

    let filename = `${year}-${month}-${day}-${hours}-${minutes}-bild.png`;
    saveCanvas(filename, "png"); // Speichert das Bild mit dem neuen Dateinamen
  }
} // func screenshot