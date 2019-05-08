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
};

function update() {
  for (var i = units.length - 1; i >= 0; i--) {
    if (units[i].health <= 0) {
      unitLayer.removeChild(units[index].graphics);
      units.splice(index, 1);
    } else {
      update_unit(units[i]);
    }
  }
}

animate();

