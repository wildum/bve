let Application = PIXI.Application,
    Container = PIXI.Container,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite,
    Rectangle = PIXI.Rectangle;

let app = new Application({ 
    width: SCREEN_WIDTH, 
    height: SCREEN_HEIGHT,
    transparent: false, 
    resolution: 1,
    backgroundColor: 0xFFFFFF
  }
);

const gameLayer = new PIXI.Container();

const unitLayer = new PIXI.Container();
const fruitLayer = new PIXI.Container();

gameLayer.addChild(unitLayer);
gameLayer.addChild(fruitLayer);

app.stage.addChild(gameLayer);
