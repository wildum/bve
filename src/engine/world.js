const UNIT_NUMBER = 1;
const FRUIT_NUMBER = 30;
const minX = 50;
const minY = 50;
const maxX = screenWidth - 50;
const maxY = screenHeight - 50;
const entityFactory = new EntityFactory();

function generateWorld() {
    for (let i = 0; i < FRUIT_NUMBER; i++) {
        fruits.push(generateAtRandomPositions('FRUIT'));
    }
    for (let i = 0; i < UNIT_NUMBER; i++) {
        units.push(generateAtRandomPositions('FISH'));
    }
}

function generateAtRandomPositions(type) {
    return entityFactory.createUnit(type, getRandomInt(minX, maxX), getRandomInt(minY, maxY));
}

function checkWindowLimits(entity) {
    if (entity.x < 0) {
        entity.x += screenWidth;
    } else if (entity.x > screenWidth) {
        entity.x -= screenWidth;
    }
    if (entity.y < 0) {
        entity.y += screenHeight;
    } else if (entity.y > screenHeight) {
        entity.y -= screenHeight;
    }
}