const FISH_LENGTH = 60;
const FISH_WIDTH = 10;
const FRUIT_RADIUS = 5;

let g = new PIXI.Graphics();
g.beginFill(0xFFFFFF);
g.drawCircle(0, 0, 20);
g.endFill();
const discTexture = g.generateCanvasTexture();

g = new PIXI.Graphics();
g.beginFill(0xFF0000);
g.drawRect(0, 0, FISH_LENGTH, FISH_WIDTH);
g.endFill();
const fishTexture = g.generateCanvasTexture();

function getUnitGraphics(radius, color) {
    const sprite = new PIXI.Sprite(discTexture);
    sprite.scale.set((radius*2)/sprite.width);
    unitLayer.addChild(sprite);
    sprite.tint = color;
    sprite.anchor.set(0.5);
    return sprite;
}

function getFishGraphics() {
    const sprite = new PIXI.Sprite(fishTexture);
    unitLayer.addChild(sprite);
    sprite.anchor.set(0.5);
    sprite.type = 'rect';
    return sprite;
}

function getFruitGraphics() {
    const sprite = new PIXI.Sprite(discTexture);
    sprite.scale.set((FRUIT_RADIUS*2)/sprite.width);
    unitLayer.addChild(sprite);
    sprite.tint = 0x00FF00;
    sprite.anchor.set(0.5);
    sprite.type = 'circle';
    return sprite;
}