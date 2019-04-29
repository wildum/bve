class Unit extends MovableEntity {
  constructor(x, y, graphics) {
    super(x, y, graphics);
    this.speed = UNIT_DEFAULT_SPEED;
    this.health = UNIT_DEFAULT_HEALTH;
  }

  update() {

  }

  takeDamages(damageValue) {
    this.health -= damageValue;
  }

  heal(healValue) {
    this.health += healValue;
  }
}

function update_units() {
  for (var i = units.length-1; i >= 0; i--) {
    if (units[i].health <= 0) {
        remove_unit(i);
    } else {
        units[i].act();
    }
  }
}

function remove_unit(index) {
  unitLayer.removeChild(units[index].graphics);
  units.splice(index, 1);
}

function check_units_collisions(entity, x, y) {
  for (var i = 0; i < units.length; i++) {
      if (entity.id != units[i].id && squareDist(x, y, units[i].x, units[i].y) < Math.pow(entity.radius + units[i].radius, 2)) {
          return true;
      }
  }
  return false;
}
