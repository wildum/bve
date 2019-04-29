'use strict';

function setup() {

  units = [];
  events = [];
  fruits = [];

  state = play;

  generateWorld();
 
  app.ticker.add(delta => gameLoop(delta));
}

document.getElementById('canvasZone').appendChild(app.view);

setup();

function gameLoop(delta){
  state(delta);
}

function play(delta) {
  update_units();
  play_events();
  events.length = 0;
}

