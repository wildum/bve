class Vector {

    static squareDist(a, b) {
        return Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2);
    }

    static dist(a, b) {
        return Math.sqrt(Vector.squareDist(a, b));
    }

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    divideScalar(scalar) {
        if (scalar !== 0) {
            this.x /= scalar;
            this.y /= scalar;
        } else {
            this.x = 0;
            this.y = 0;
        }
    }

    length() {
       return Math.sqrt(this.lengthSq());
    }

    lengthSq() {
        return this.x * this.x + this.y * this.y;
    }

    normalize() {
        let length = this.length();

        if (length === 0) {
            this.x = 1;
            this.y = 0;
        } else {
            this.divideScalar(length);
        }
        return this;
    }

    multiplyScalar(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }

    static dot(u, v) {
        return u.x * v.x + u.y * v.y;
    }
}

class Rectangle {
    constructor(x, y, w, h) {
        this.A = new Vector(x, y);
        this.B = new Vector(x + w, y);
        this.C = new Vector(x + w, y + h);
        this.D = new Vector(x, y + h);
        this.width = w;
        this.height = h;
    }
    rotateAroundA(d) {
        this.B.x = this.A.x + this.width*Math.cos(d);
        this.B.y = this.A.y + this.width*Math.sin(d);
        this.D.x = this.A.x - this.height*Math.sin(d);
        this.D.y = this.A.y + this.height*Math.cos(d);
        const mulx = d > 90 && d < 270 ? 1 : -1;
        const muly = d > 45 && d < 225 ? 1 : -1;
        this.C.x = this.A.x + mulx*((this.A.x - this.B.x) + (this.A.x - this.D.x));
        this.C.y = this.A.y + muly*((this.A.y - this.B.y) + (this.A.y - this.D.y));
    }
    contains(point) {
        const AB = buildVectorFromVectors(this.A, this.B);
        const AM = buildVectorFromVectors(this.A, point);
        const BC = buildVectorFromVectors(this.B, this.C);
        const BM = buildVectorFromVectors(this.B, point);
        const dotABAM = Vector.dot(AB, AM);
        const dotABAB = Vector.dot(AB, AB);
        const dotBCBM = Vector.dot(BC, BM);
        const dotBCBC = Vector.dot(BC, BC);
        return 0 <= dotABAM && dotABAM <= dotABAB && 0 <= dotBCBM && dotBCBM <= dotBCBC;
    }
}

function lerp(a, b, u) {
    if (a <= b) {
        return a + (b - a) * u;
    } else {
        return b + (a - b) * (1 - u);
    }
}

function squareDist(x1, y1, x2, y2) {
    return Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function buildVectorFromVectors(u, v) {
    return new Vector(v.x - u.x, v.y - u.y);
}