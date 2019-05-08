const Application = PIXI.Application,
  Container = PIXI.Container,
  loader = PIXI.loader,
  resources = PIXI.loader.resources,
  TextureCache = PIXI.utils.TextureCache,
  Sprite = PIXI.Sprite,
  Rectangle = PIXI.Rectangle;

const stage = new Container();
const renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.view);
const r = new PIXI.Graphics(); r.beginFill(0xFFFFFF); r.drawRect(0, 0, window.innerWidth, window.innerHeight); r.endFill();
stage.addChild(r);

$(window).resize(resize);

const gameLayer = new Container();

const unitLayer = new Container();
const fruitLayer = new Container();

gameLayer.addChild(unitLayer);
gameLayer.addChild(fruitLayer);

stage.addChild(gameLayer);

const render = function () {
  renderer.render(stage);
};

function resize() {
  screenWidth = $(window).width();
  screenHeight = $(window).height();
  renderer.resize(screenWidth, screenHeight);
}
