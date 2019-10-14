const FISH_NUMBER = 30;
const FRUIT_NUMBER = 50;
const minX = 50;
const minY = 50;
const maxX = screenWidth - 50;
const maxY = screenHeight - 50;
const entityFactory = new EntityFactory();

function generateWorld() {
    for (let i = 0; i < FRUIT_NUMBER; i++) {
        fruits.push(generateAtRandomPositions('FRUIT'));
    }
    for (let i = 0; i < FISH_NUMBER; i++) {
        units.push(generateAtRandomPositions('FISH'));
    }
}

function generateAtRandomPositions(type) {
    return entityFactory.createUnit(type, getRandomInt(minX, maxX), getRandomInt(minY, maxY));
}