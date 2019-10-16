'use strict';

function setup() {

  units = [];
  events = [];
  fruits = [];

  generateWorld();
 
}

setup();

const animate = function () {
  update();
  requestAnimationFrame(animate);
  render();
  checkEndGame();
};

function update() {
  for (let i = units.length - 1; i >= 0; i--) {
    if (units[i].health <= 0) {
      unitLayer.removeChild(units[i].graphics);
      units.splice(i, 1);
    } else {
      update_unit(units[i]);
    }
  }
}

function checkEndGame() {
  if (units.length === 0 && gameOn) {
    clearIntervals();
    gameOn = false;
    console.log("end");
  }
}

animate();

