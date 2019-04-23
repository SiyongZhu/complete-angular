var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    /* can't use multiple constructors in typescript
     * add ? to make the variable optional
     * then we can use point = new Point()
     * NOTE: once make one param optional, all params on the right side also need to be optional
    constructor(x?:number, y?:number) {
        this.x = x
        this.y = y
    } */
    Point.prototype.draw = function () {
        console.log(this.x + ' ' + this.y);
    };
    return Point;
}());
// let point: Point  //this process will fail b/c
// point.draw()      //point is using a custom type Point
//we need to manually allocate memory to it
var point = new Point(3, 5); // we need to use `new` keyword
point.draw();
var Person = /** @class */ (function () {
    //as convention, use _ to name a property of a class
    function Person(_name, _age) {
        this._name = _name;
        this._age = _age;
        //We can use this simpler constructor to declare object
        //no need to use this.name = name etc
    }
    Person.prototype.introduction = function () {
        console.log(this._name + " is " + this._age + " years old");
    };
    Object.defineProperty(Person.prototype, "name", {
        //with get and set keyword, we can use those properties as field
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        set: function (value) {
            if (value < 0)
                throw new Error(value + " can't be less than 0");
            this._age = value;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var tom = new Person('Tom', 23);
tom.introduction();
console.log(tom.name);
tom.age = -2; // <- this throws an error 
