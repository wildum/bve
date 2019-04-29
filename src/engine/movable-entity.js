class MovableEntity extends Entity {


    constructor(x, y, graphics) {
        super(x, y, graphics);
        this.speed = 0;
    }

    rotate(value) {
        this.rotation += value;
    }

    move() {
        var t = 1/this.speed;
        const angle = this.rotation * Math.PI / 180;
        const tx = this.speed * Math.cos(angle) + this.x;
        const ty = this.speed * Math.sin(angle) + this.y;
        while (t <= 1.0) {
            events.push(new EventMovement(this, t, lerp(this.x, tx, t), lerp(this.y, ty, t)));
            t+=1/this.speed;
        }
    }


}