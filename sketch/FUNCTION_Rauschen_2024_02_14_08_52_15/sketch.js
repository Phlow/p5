n1 = 0;
n2 = 0;
n3 = 0;
n4 = 0;

noiseLevel = 60; // Stärke der Multiplikation Apmplitude
noiseScale = 0.009; // Stärke Unterschied von Perlin Noise 0.1 stark 0.001 schwächer

function setup() {
  createCanvas(200, 200);
  // hue, saturation, brightness, transparency
  colorMode(HSB, 360, 100, 100, 1.0);
}

function draw() {
  background(0);
  translate(3, -3);
  
  // Rauschen
  for (let y = 20; y < 100; y++) {
    for (let x = 10; x < 90; x++) {
      noiseVal = map(noise(n1), 0, 1, 0, 100);
      // Hohe Werte mehr Chaos und Körnig
      // niedriger Werte mehr Streifen wie im TV/C64
      n1 += 1;
      stroke(0, 100, noiseVal, 1.0);
      point(x, y);
    }
  }

  // Rauschen
  for (let y = 20; y < 100; y++) {
    for (let x = 100; x < 180; x++) {
      noiseVal = map(noise(n2), 0, 1, 0, 100);
      // Hohe Werte mehr Chaos und Körnig
      // niedriger Werte mehr Streifen wie im TV/C64
      n2 += 0.1;
      stroke(90, 100, noiseVal, 1.0);
      point(x, y);
    }
  }

  // Rauschen
  for (let y = 110; y < 190; y++) {
    for (let x = 10; x < 90; x++) {
      noiseVal = map(noise(n3), 0, 1, 0, 100);
      // Hohe Werte mehr Chaos und Körnig
      // niedriger Werte mehr Streifen wie im TV/C64
      n3 += 0.001;
      stroke(180, 100, noiseVal, 1.0);
      point(x, y);
    }
  }

  // Rauschen
  for (let y = 110; y < 190; y++) {
    for (let x = 100; x < 180; x++) {
      noiseVal = map(noise(n4), 0, 1, 0, 100);
      // Hohe Werte mehr Chaos und Körnig
      // niedriger Werte mehr Streifen wie im TV/C64
      n4 += 0.0001;
      stroke(270, noiseVal, 100, 1.0);
      point(x, y);
    }
  }
  // noLoop()
}
