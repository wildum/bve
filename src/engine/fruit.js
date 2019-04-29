const DEFAULT_FRUIT_VALUE = 25;

class Fruit extends Entity {
    constructor(x, y, graphics) {
        super(x, y, graphics);
        this.value = DEFAULT_FRUIT_VALUE;
        this.radius = FRUIT_RADIUS;
    }
}