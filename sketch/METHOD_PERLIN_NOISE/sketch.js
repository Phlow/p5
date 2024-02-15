let xReset = 0;
noiseLevel = 90; // Stärke Multiplikation Amplitude
noiseScale = 0.01; // Stärke Rauschen Perlin Noise 0.1 stark 0.001 schwächer

function setup() {
  createCanvas(200, 200);
  background("#267fb5");
}

function draw() {
  let x = frameCount;
  let nx = noiseScale * x;
  noise(nx);
  // Berechne noise value
  let y = noiseLevel * noise(nx);

  // Render
  stroke("#ffB20d")
  strokeWeight(1);
  point(xReset, y);
  
  // Variable damit Linie wieder auf 0 anfängt 
  xReset+= 0.4;
  if (xReset > width) {
    xReset=0
  }
  print(xReset)
}
