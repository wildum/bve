const UNIT_NUMBER = 1;
const FRUIT_NUMBER = 30;
const minX = 50;
const minY = 50;
const maxX = SCREEN_WIDTH - 50;
const maxY = SCREEN_HEIGHT - 50;
const entityFactory = new EntityFactory();

function generateWorld() {
    for (let i = 0; i < UNIT_NUMBER; i++) {
        units.push(generateAtRandomPositions('FISH'));
    }
    for (let i = 0; i < FRUIT_NUMBER; i++) {
        fruits.push(generateAtRandomPositions('FRUIT'));
    }
}

function generateAtRandomPositions(type) {
    return entityFactory.createUnit(type, getRandomInt(minX, maxX), getRandomInt(minY, maxY));
}