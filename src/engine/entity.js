class Entity extends Vector {

    constructor(x, y, graphics) {
        super(x, y);
        this.id = entityId++;
        this.graphics = graphics;
        this.type = graphics.type;
        this.graphics.x = x;
        this.graphics.y = y;
        this.rotation = 0;
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
        return new Fish(x, y, getFishGraphics());
      } else if (type === 'FRUIT') {
        return new Fruit(x, y, getFruitGraphics());
      }
      return null;
    }
  
  }