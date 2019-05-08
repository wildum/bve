class Unit extends MovableEntity {

  constructor(x, y, graphics) {
    super(x, y, graphics);
    this.speed = UNIT_DEFAULT_SPEED;
    this.velocity = 0;
    this.health = UNIT_DEFAULT_HEALTH;
  }

}

setInterval(() => {
  units.forEach(unit => {
    unit.act();
  });
}, 100);

function update_unit(unit) {
  unit.rotate();
  unit.move();
  unit.velocity *= 0.98;
  unit.rotationAngle = 0;
  checkWindowLimits(unit);
}

function check_units_collisions(entity, x, y) {
  for (var i = 0; i < units.length; i++) {
    if (entity.id != units[i].id && squareDist(x, y, units[i].x, units[i].y) < Math.pow(entity.radius + units[i].radius, 2)) {
      return true;
    }
  }
  return false;
}
