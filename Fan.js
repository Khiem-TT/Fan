var Fan = /** @class */ (function () {
    function Fan() {
        this._slow = 1;
        this._medium = 2;
        this._fast = 3;
        this._speed = 1;
        this._on = false;
        this._radius = 5;
        this._color = 'blue';
    }
    Fan.prototype.getSlow = function () {
        return this._slow;
    };
    Fan.prototype.setSlow = function (value) {
        this._slow = value;
    };
    Fan.prototype.getMedium = function () {
        return this._medium;
    };
    Fan.prototype.setMedium = function (value) {
        this._medium = value;
    };
    Fan.prototype.getFast = function () {
        return this._fast;
    };
    Fan.prototype.setFast = function (value) {
        this._fast = value;
    };
    Fan.prototype.getSpeed = function () {
        return this._speed;
    };
    Fan.prototype.setSpeed = function (value) {
        this._speed = value;
    };
    Fan.prototype.getOn = function () {
        return this._on;
    };
    Fan.prototype.setOn = function (value) {
        this._on = value;
    };
    Fan.prototype.getRadius = function () {
        return this._radius;
    };
    Fan.prototype.setRadius = function (value) {
        this._radius = value;
    };
    Fan.prototype.getColor = function () {
        return this._color;
    };
    Fan.prototype.setColor = function (value) {
        this._color = value;
    };
    Fan.prototype.toString = function () {
        if (this.getOn() === true) {
            console.log("fan is on");
            console.log(this._speed);
            console.log(this._color);
            console.log(this._radius);
        }
        else {
            console.log("fan is off");
            console.log(this._color);
            console.log(this._radius);
        }
    };
    return Fan;
}());
var fan1 = new Fan();
fan1.setSpeed(3);
fan1.setRadius(10);
fan1.setColor('yellow');
fan1.setOn(true);
fan1.toString();
var fan2 = new Fan();
fan2.setSpeed(2);
fan2.toString();
