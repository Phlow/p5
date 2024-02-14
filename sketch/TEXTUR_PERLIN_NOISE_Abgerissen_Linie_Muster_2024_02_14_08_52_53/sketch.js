let time = 0;
let mv = 0.5;
let cycle = 0;
let colors = [
  "#14191f" /* background blue */,
  "#f1f6fb" /* white */,
  "#ff410d" /* red */,
  "#ffB20d" /* orange */,
  "#aec2e0" /* blue light */,
  "#748aa6" /* greyblue */,
  "#267fb5" /* blue */,
];

function draw() {

  let yNoise;
  let noiseInc = 0.04
  for (let c = 0; c < 7; c ++) {
    for (let y = 0; y < height; y+=1) {
      yNoise = map(noise(0.1, y * noiseInc), 0, 1, 0, 15 );
      print(y);
      stroke(colors[c]);
      line(0, y, width/1.3 + yNoise - c * 150 , y);
    }
    noiseInc = noiseInc + 0.02
  }

  noLoop();
}

