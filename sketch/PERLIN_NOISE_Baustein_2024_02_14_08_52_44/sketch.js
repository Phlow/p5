noiseLevel = 70; // Stärke der Multiplikation Apmplitude
noiseScale = 0.01; // Stärke Unterschied von Perlin Noise 0.1 stark 0.001 schwächer

let colors = [
  "#14191f" /* 0 – background blue */,
  "#f1f6fb" /* 1 – white */,
  "#ff410d" /* 2 – red */,
  "#ffB20d" /* 3 – orange */,
  "#aec2e0" /* 4 – blue light */,
  "#748aa6" /* 5 – greyblue */,
  "#267fb5" /* 6 – blue */,
];

function setup() {
  createCanvas(400, 400);
  background(colors[6]);
}

function draw() {
  // Scale input coordinate.
  let x = frameCount;
  let nx = noiseScale * x;
  noise(nx);
  // Compute noise value.
  let y = noiseLevel * noise(nx);

  // Render
  strokeWeight(1);
  point(x, y);
}
