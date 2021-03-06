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
        const cos = Math.cos(this.rotation);
        const sin = Math.sin(this.rotation);
        let nx = this.x + this.velocity * cos;
        let ny = this.y + this.velocity * sin;
        const v_cos = (FISH_RADIUS + (UNIT_DEFAULT_VISION_SQUARE_NUMBER_DEEP*UNIT_DEFAULT_VISION_SQUARE_LENGTH)/2) * cos;
        const v_sin = (FISH_RADIUS + (UNIT_DEFAULT_VISION_SQUARE_NUMBER_DEEP*UNIT_DEFAULT_VISION_SQUARE_LENGTH)/2) * sin;
        ({nx, ny} = checkWindowLimits(nx, ny));
        if (!check_collisions(this, nx, ny)) {
            this.x = nx;
            this.y = ny;
        }
        this.vision.x = this.x + v_cos;
        this.vision.y = this.y + v_sin;
        for (let i = 0; i < this.visionCalc.length; i++) {
            const mod = (i%UNIT_DEFAULT_VISION_SQUARE_NUMBER_DEEP)*UNIT_DEFAULT_VISION_SQUARE_LENGTH;
            const div = Math.floor(i/UNIT_DEFAULT_VISION_SQUARE_NUMBER_DEEP)*UNIT_DEFAULT_VISION_SQUARE_LENGTH;
            this.visionCalc[i].A.x = this.x + FISH_RADIUS * cos + UNIT_DEFAULT_VISION_HALF_SIDE_LENGTH * sin + mod * cos - div * sin;
            this.visionCalc[i].A.y = this.y + FISH_RADIUS * sin - UNIT_DEFAULT_VISION_HALF_SIDE_LENGTH * cos + mod * sin + div * cos;
            this.visionCalc[i].rotateAroundA(this.rotation);
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