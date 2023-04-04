class Fan {
    _slow = 1;
    _medium = 2;
    _fast = 3;
    private _speed = 1;
    private _on = false;
    private _radius = 5;
    private _color = 'blue';

    constructor() {
    }

    getSlow(): number {
        return this._slow;
    }

    setSlow(value: number) {
        this._slow = value;
    }

    getMedium(): number {
        return this._medium;
    }

    setMedium(value: number) {
        this._medium = value;
    }

    getFast(): number {
        return this._fast;
    }

    setFast(value: number) {
        this._fast = value;
    }

    getSpeed(): number {
        return this._speed;
    }

    setSpeed(value: number) {
        this._speed = value;
    }

    getOn(): boolean {
        return this._on;
    }

    setOn(value: boolean) {
        this._on = value;
    }

    getRadius(): number {
        return this._radius;
    }

    setRadius(value: number) {
        this._radius = value;
    }

    getColor(): string {
        return this._color;
    }

    setColor(value: string) {
        this._color = value;
    }

    toString() {
        if (this.getOn() === true) {
            console.log("fan is on");
            console.log(this._speed);
            console.log(this._color);
            console.log(this._radius);
        } else {
            console.log("fan is off");
            console.log(this._color);
            console.log(this._radius);
        }
    }
}

let fan1 = new Fan();
fan1.setSpeed(3);
fan1.setRadius(10);
fan1.setColor('yellow');
fan1.setOn(true);
fan1.toString();

let fan2 = new Fan();
fan2.setSpeed(2);
fan2.toString();

