const FISH_RADIUS = 15;
const FRUIT_RADIUS = 5;

const FRUIT_TEXTURE = PIXI.Texture.from('assets/fruit.png');
const FISH_TEXTURE = PIXI.Texture.from('assets/fish.png');

function getRoundSpriteTexture(texture, radius) {
    const sprite = new PIXI.Sprite(texture);
    sprite.scale.set(radius*2/100);
    unitLayer.addChild(sprite);
    sprite.anchor.set(0.5);
    return sprite;
}