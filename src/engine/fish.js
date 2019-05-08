const actions = ['MOVE', 'WAIT', 'ROTATE', 'INV_ROTATE'];
class Fish extends Unit {
    constructor(x, y, graphics) {
        super(x, y, graphics);
        this.biteRange = 15;
        this.radius = FISH_RADIUS;
        this.rotationValue = 15;
        this.velocityValue = 5;
        const rec = new PIXI.Graphics();
        //Rectangle(this.x + this.radius, this.y + 30, 40, 60);
        rec.beginFill(0x0000FF);
        rec.drawRect(0, 0, 50, 70);
        rec.endFill();
        this.vision = new PIXI.Sprite(rec.generateCanvasTexture());
        this.vision.anchor.set(0.5);
        this.vision.x = this.x + FISH_RADIUS + 10;
        this.vision.y = this.y;
        unitLayer.addChild(this.vision);
    }

    think() {
        const i = getRandomInt(0, actions.length);
        return actions[i];
    }

    act() {
        switch (this.think()) {
            case 'MOVE':
                this.velocity = this.velocityValue;
                break;
            case 'ROTATE':
                this.rotationAngle = this.rotationValue;
                break;
            case 'INV_ROTATE':
                this.rotationAngle = -this.rotationValue;
                break;
            case 'WAIT':
                break;
        }
    }

    move() {
        super.move();
    }

    rotate(value) {
        super.rotate(value);
    }
}