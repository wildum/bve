'use strict';

function setup() {

  units = [];
  events = [];
  fruits = [];

  generateWorld();
 
  app.ticker.add(delta => gameLoop(delta));
}

document.getElementById('canvasZone').appendChild(app.view);

setup();

function gameLoop(delta){
}

setInterval(() => { 
  play();
}, TIME_FRAME_MS);

function play() {
  update_units();
  play_events();
  events.length = 0;
}

