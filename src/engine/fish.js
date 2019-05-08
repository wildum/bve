const actions = ['MOVE', 'ROTATE', 'INV_ROTATE'];
class Fish extends Unit {
    constructor(x, y, graphics) {
        super(x, y, graphics);
        this.biteRange = 15;
        this.length = FISH_LENGTH;
        this.width = FISH_LENGTH;
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
                this.rotate(10);
                break;
            case 'INV_ROTATE':
                this.rotate(-10);
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