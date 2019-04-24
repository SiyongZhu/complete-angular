class Point {
    constructor(x, y) {
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
    draw() {
        console.log(this.x + ' ' + this.y);
    }
}
// let point: Point  //this process will fail b/c
// point.draw()      //point is using a custom type Point
//we need to manually allocate memory to it
let point = new Point(3, 5); // we need to use `new` keyword
point.draw();
class Person {
    //as convention, use _ to name a property of a class
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
        //We can use this simpler constructor to declare object
        //no need to use this.name = name etc
    }
    introduction() {
        console.log(`${this._name} is ${this._age} years old`);
    }
    //with get and set keyword, we can use those properties as field
    get name() {
        return this._name;
    }
    set age(value) {
        if (value < 0)
            throw new Error(`${value} can't be less than 0`);
        this._age = value;
    }
}
let tom = new Person('Tom', 23);
tom.introduction();
console.log(tom.name);
tom.age = -2; // <- this throws an error 
