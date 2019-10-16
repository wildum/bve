const FISH_RADIUS = 15;
const FRUIT_RADIUS = 5;

const FRUIT_TEXTURE = PIXI.Texture.from('assets/fruit.png');
const FISH_TEXTURE = PIXI.Texture.from('assets/fish_blue.png');

const squareGraphic = new PIXI.Graphics();
squareGraphic.beginFill(0xFFFFFF);
squareGraphic.lineStyle(1, 0x000000);
squareGraphic.drawRect(0, 0, UNIT_DEFAULT_VISION_SQUARE_LENGTH, UNIT_DEFAULT_VISION_SQUARE_LENGTH);
squareGraphic.endFill();
const squareTexture = squareGraphic.generateCanvasTexture();

function getRoundSpriteTexture(texture, radius, layer) {
    const sprite = new PIXI.Sprite(texture);
    sprite.scale.set(radius*2/100);
    layer.addChild(sprite);
    sprite.anchor.set(0.5);
    return sprite;
}