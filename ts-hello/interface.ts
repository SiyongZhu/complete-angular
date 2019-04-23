let drawPoint = (x, y) => { //this implementation takes many variables
    //....operations
}

// we can group thos parameters together
let drawPointWithPoint = (point: {x: number, y:number}) => {
    //..... draw a point
}

//interface is purely for declartion, not business logic
interface Point {
    x: number,
    y: number
}

let drawAnotherPoint = (point: Point) => {
    // draw points
}