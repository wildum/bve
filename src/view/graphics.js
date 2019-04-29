const FISH_RADIUS_BODY = 15;
const FRUIT_RADIUS = 5;

const g = new PIXI.Graphics();
g.beginFill(0xFFFFFF);
g.drawCircle(0, 0, 20);
g.endFill();
const discTexture = g.generateCanvasTexture();

function getUnitGraphics(radius, color) {
    const sprite = new PIXI.Sprite(discTexture);
    sprite.scale.set((radius*2)/sprite.width);
    unitLayer.addChild(sprite);
    sprite.tint = color;
    sprite.anchor.set(0.5);
    return sprite;
}

function getFishGraphics() {
    const sprite = new PIXI.Sprite(discTexture);
    sprite.scale.set((FISH_RADIUS_BODY*2)/sprite.width);
    unitLayer.addChild(sprite);
    sprite.tint = 0xFF0000;
    sprite.anchor.set(0.5);
    return sprite;
}

function getFruitGraphics() {
    const sprite = new PIXI.Sprite(discTexture);
    sprite.scale.set((FRUIT_RADIUS*2)/sprite.width);
    unitLayer.addChild(sprite);
    sprite.tint = 0x00FF00;
    sprite.anchor.set(0.5);
    return sprite;
}