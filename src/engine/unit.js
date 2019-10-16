class Unit extends MovableEntity {

  constructor(x, y, graphics) {
    super(x, y, graphics);
    this.speed = UNIT_DEFAULT_SPEED;
    this.velocity = 0;
    this.health = UNIT_DEFAULT_HEALTH;
    this.visionCalc = [];
    this.vision = new PIXI.Container();
    buildVision(this);
    this.vision.x = this.x + FISH_RADIUS + (UNIT_DEFAULT_VISION_SQUARE_NUMBER_DEEP*UNIT_DEFAULT_VISION_SQUARE_LENGTH)/2;
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

function update_unit(unit) {
  unit.rotate();
  unit.move();
  unit.velocity *= UNIT_DEFAULT_VELOCITY_LOSS;
  unit.rotationAngle = 0;
  unit.updateVision();
}

function decay_health(unit) {
  unit.health -= UNIT_DEFAULT_HEALTH_DECAY;
  unit.graphics.alpha = unit.health / unit.maxHealth;
}

function buildVision(unit) {
  for (let i = 0; i < UNIT_DEFAULT_VISION_SQUARE_TOTAL_NUMBER; i++) {
    let sp = new PIXI.Sprite(squareTexture);
    sp.x = (i%UNIT_DEFAULT_VISION_SQUARE_NUMBER_DEEP)*UNIT_DEFAULT_VISION_SQUARE_LENGTH;
    sp.y = Math.floor(i/UNIT_DEFAULT_VISION_SQUARE_NUMBER_DEEP)*UNIT_DEFAULT_VISION_SQUARE_LENGTH;
    unit.vision.addChild(sp);
    let vc = new Rectangle(0, 0, UNIT_DEFAULT_VISION_SQUARE_LENGTH, UNIT_DEFAULT_VISION_SQUARE_LENGTH);
    vc.A.x = unit.x + (i%UNIT_DEFAULT_VISION_SQUARE_NUMBER_DEEP)*UNIT_DEFAULT_VISION_SQUARE_LENGTH + FISH_RADIUS;
    vc.A.y = unit.y + Math.floor(i/UNIT_DEFAULT_VISION_SQUARE_NUMBER_DEEP)*UNIT_DEFAULT_VISION_SQUARE_LENGTH - UNIT_DEFAULT_VISION_HALF_SIDE_LENGTH;
    unit.visionCalc.push(vc);
  }
}
