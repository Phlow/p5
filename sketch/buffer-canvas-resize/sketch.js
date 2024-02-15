let step = 10; // Stelle sicher, dass 'step' initialisiert ist

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);

  canvas1 = createGraphics(400, 400);
  canvas1.background("#7A7267");
  // Setze stroke und strokeWeight einmal
  canvas1.stroke("#F8BB39");
  canvas1.strokeWeight(1);
  // Zuerst die Translation anwenden
  canvas1.translate(200, 200);

  for (let i = 0; i < 360; i += step) {
    canvas1.push();
    canvas1.rotate(radians(i)); // Verwende 'radians' für die Rotation
    canvas1.line(0, 0, 0, random(200, 300));
    canvas1.pop();
  }
}

function draw() {
  background("#72677A");
  canvas1.width = 400;
  canvas1.height = 400;

  image(canvas1, 0, 0); // Zeichne den Buffer Canvas auf den Haupt-Canvas

  // Ändere die Größer von canvas1
  canvas1.width = 100;
  canvas1.height = 100;
  image(canvas1, 0, 500);

  // Ändere die Größer von canvas1
  canvas1.width = 200;
  canvas1.height = 200;
  image(canvas1, 200, 500);

}
