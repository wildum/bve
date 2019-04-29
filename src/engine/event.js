class Event {

    constructor(entity, t) {
        this.entity = entity;
        this.t = t;
    }

}

class EventMovement extends Event {

    constructor(entity, t, x, y) {
        super(entity, t);
        this.x = x;
        this.y = y;
    }

    play() {
        if (!check_units_collisions(this.entity, this.x, this.y)) {
            this.entity.x = this.x;
            this.entity.y = this.y;
            checkWindowLimits(this.entity);
        }
    }

}

function checkWindowLimits(entity) {
    if (entity.x < 0) {
        entity.x += SCREEN_WIDTH;
    } else if (entity.x > SCREEN_WIDTH) {
        entity.x -= SCREEN_WIDTH;
    }
    if (entity.y < 0) {
        entity.y += SCREEN_HEIGHT;
    } else if (entity.y > SCREEN_HEIGHT) {
        entity.y -= SCREEN_HEIGHT;
    }
}

// sort events with time
function time_sort(o1, o2) {
    return ((o1.t < o2.t) ? -1 : ((o1.t > o2.t) ? 1 : 0));
}

function play_events() {

    events.sort(time_sort);

    let t = performance.now();
    let start_of_frame = t;
    let end_of_frame = t + TIME_FRAME_MS;

    // a frame is splitted in 100 entity of t
    while (t <= end_of_frame) {

        // play events if their time has come
        while (events.length > 0 && start_of_frame + TIME_FRAME_MS * events[0].t <= t) {
            events[0].play();
            events.shift();
        }
        // time flies
        t = performance.now();
    }

}