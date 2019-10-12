const actions = ['MOVE', 'WAIT', 'ROTATE', 'INV_ROTATE'];
class Fish extends Unit {
    constructor(x, y, graphics) {
        super(x, y, graphics);
        this.biteRange = 15;
        this.radius = FISH_RADIUS;
        this.maxHealth = UNIT_DEFAULT_HEALTH;
        this.rotationValue = 15;
        this.velocityValue = 5;
        this.rotationAngle = 0;
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