class MovableEntity extends Entity {


    constructor(x, y, graphics) {
        super(x, y, graphics);
        this.velocity = 0;
        this.velocityValue = 0;
        this.rotation = 0;
        this.rotationValue = 0;
        this.rotationAngle = 0;
    }

    rotate() {
        this.rotation += this.rotationAngle * Math.PI / 180;
    }

    move() {
        this.x += this.velocity * Math.cos(this.rotation);
        this.y += this.velocity * Math.sin(this.rotation);
    }


}