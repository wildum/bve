const unitsAct = setInterval(() => {
    units.forEach(unit => {
        unit.act();
        decay_health(unit);
    });
}, TIMER_UNIT_ACT);

const fruitsSpawn = setInterval(() => {
    fruits.push(generateAtRandomPositions('FRUIT'));
}, TIMER_FRUIT_SPAWN);

document.getElementById('time').innerHTML = '0:00';

const timer = setInterval(() => {
    time++;
    document.getElementById('time').innerHTML = Math.floor(time/60) + ':' + (time%60 < 10 ? '0' + time%60 : time%60);
}, 1000);

function clearIntervals() {
    clearInterval(unitsAct);
    clearInterval(fruitsSpawn);
    clearInterval(timer);
}