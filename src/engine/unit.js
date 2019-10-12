class Unit extends MovableEntity {

  constructor(x, y, graphics) {
    super(x, y, graphics);
    this.speed = UNIT_DEFAULT_SPEED;
    this.velocity = 0;
    this.health = UNIT_DEFAULT_HEALTH;
    this.visionCalc = [];
    this.vision = new PIXI.Container();
    for (let i = 0; i < 80; i++) {
      let sp = new PIXI.Sprite(squareTexture);
      sp.x = (i%10)*10;
      sp.y = Math.floor(i/10)*10;
      this.vision.addChild(sp);
      let vc = new Rectangle(0, 0, 10, 10);
      vc.A.x = this.x + (i%10)*10 + FISH_RADIUS;
      vc.A.y = this.y + Math.floor(i/10)*10 - 40;
      this.visionCalc.push(vc);
    }
    this.vision.x = this.x + FISH_RADIUS + 50;
    this.vision.y = this.y;
    this.vision.pivot.x = this.vision.width / 2;
    this.vision.pivot.y = this.vision.height / 2;
    unitLayer.addChild(this.vision);
  }

  updateVision() {
      for (let i = 0; i < this.visionCalc.length; i++) {
        let nbOfFruits = 0;
        let nbOfUnits = 0;
        for (let f of fruits) {
            if (this.visionCalc[i].contains(f)) {
              nbOfFruits++;
            }
        }
        for (let u of units) {
            if (this.visionCalc[i].contains(u)) {
              nbOfUnits++;
            }
        }
        this.vision.children[i].tint = nbOfUnits > 0 ? 0x0000FF : nbOfFruits > 0 ? 0xFF00FF : 0xFFFFFF;
      }
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
  unit.updateVision();
}
