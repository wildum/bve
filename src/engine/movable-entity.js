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
        if (this.vision) {
            this.vision.rotation = this.rotation;
        }
    }

    move() {
        let nx = this.x + this.velocity * Math.cos(this.rotation);
        let ny = this.y + this.velocity * Math.sin(this.rotation);
        ({nx, ny} = checkWindowLimits(nx, ny));
        if (!check_collisions(this, nx, ny)) {
            if (this.vision) {
                this.vision.x = nx +  (FISH_RADIUS + 10) * Math.cos(this.rotation);
                this.vision.y = ny + (FISH_RADIUS + 10) * Math.sin(this.rotation);
            }
            this.x = nx;
            this.y = ny;
        }
    }

}

  
function check_collisions(entity, x, y) {

    for (let i = fruits.length - 1; i >= 0; i--) {
        if (squareDist(x, y, fruits[i].x, fruits[i].y) < Math.pow(entity.radius + fruits[i].radius, 2)) {
            entity.health += fruits[i].value;
            fruitLayer.removeChild(fruits[i].graphics);
            fruits.splice(i, 1);
        }
    }
    for (let i = 0; i < units.length; i++) {
        if (entity.id != units[i].id
            && squareDist(x, y, units[i].x, units[i].y) < Math.pow(entity.radius + units[i].radius, 2)) {
            return true;
        }
    }
    return false;
}


function checkWindowLimits(nx, ny) {
    if (nx < 0) {
        nx += screenWidth;
    } else if (nx > screenWidth) {
        nx -= screenWidth;
    }
    if (ny < 0) {
        ny += screenHeight;
    } else if (ny > screenHeight) {
        ny -= screenHeight;
    }
    return {nx, ny};
}