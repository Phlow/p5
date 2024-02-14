let font;
let txtSz = 10;
alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let hsbPaletteMellowContrast = [
  // mellow-contrast https://daylerees.github.io/
  [30, 18, 4, 1.0],
  [60, 2, 97, 1.0],
  [35, 16, 48, 1.0],
  [33, 50, 95, 1.0],
  [11, 53, 95, 1.0],
  [41, 77, 97, 1.0],
  [77, 32, 94, 1.0],
  [42, 58, 91, 1.0],
  [180, 76, 51, 1.0],
  [216, 19, 67, 1.0],
  [295, 15, 62, 1.0],
  [215, 18, 66, 1.0],
  [24, 73, 87, 1.0],
  [53, 39, 85, 1.0],
  [206, 71, 19, 1.0],
  [51, 82, 29, 1.0],
  [113, 42, 23, 1.0],
  [5, 86, 26, 1.0],
];
function preload() {
  font = loadFont("JetBrainsMono-Medium.ttf");
}
function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100, 1.0);
}

function draw() {
  background(30, 18, 4, 1.0);
  strokeWeight(0);
  stroke(0);
  fill(hsbPaletteMellowContrast[6]);
  textSize(txtSz);
  for (let y = 25; y < height - 10; y = y + txtSz) {
    for (let x = 10; x < width - 10; x = x + txtSz) {
      letter = floor(random(alphabet.length));
      if (letter == 12) {
        fill(hsbPaletteMellowContrast[4]);
      } else if (letter == 14) {
        fill(hsbPaletteMellowContrast[6]);
      } else {
        fill(hsbPaletteMellowContrast[14]);
      }
      text(alphabet[letter], x, y);
    } // x-loop
  } // y-loop
  // noLoop()
}
