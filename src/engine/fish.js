const actions = ['MOVE', 'ROTATE', 'INV_ROTATE', 'BITE'];
class Fish extends Unit {
    constructor(x, y, graphics) {
        super(x, y, graphics);
        this.biteRange = 15;
        this.radius = FISH_RADIUS_BODY;
    }

    think() {
        const i = getRandomInt(0, actions.length);
        return actions[i];
    }

    act() {
        switch (this.think()) {
            case 'MOVE':
                this.move();
                break;
            case 'ROTATE':
                this.rotate(45);
                break;
            case 'INV_ROTATE':
                this.rotate(-45);
                break;
            case 'BITE':
                this.bite();
                break;
        }
    }

    bite() {
    }

    move() {
        super.move();
    }

    rotate(value) {
        super.rotate(value);
    }
}