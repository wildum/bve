class Entity extends Vector {

    constructor(x, y, graphics) {
        super(x, y);
        this.id = entityId++;
        this.graphics = graphics;
        this.graphics.x = x;
        this.graphics.y = y;
        this.radius = 10;
    }
    
    set x(v) { if (this.graphics)this.graphics.x = v; }
    get x() { return this.graphics.x; }
    set y(v) { if (this.graphics)this.graphics.y = v; }
    get y() { return this.graphics.y; }
    set rotation(v) {if (this.graphics)this.graphics.rotation = v;}
    get rotation() {return this.graphics.rotation;}

}

class EntityFactory {

  createUnit(type, x, y) {
    if (type === 'FISH') {
      return new Fish(x, y, getRoundSpriteTexture(FISH_TEXTURE, FISH_RADIUS, unitLayer));
    } else if (type === 'FRUIT') {
      return new Fruit(x, y, getRoundSpriteTexture(FRUIT_TEXTURE, FRUIT_RADIUS, fruitLayer));
    }
    return null;
  }

}