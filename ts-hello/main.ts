

function log(message) {
    console.log(message)
}

var message = "Hello sy"
log(message)

function loopthru(){
    for(let i=0; i<5; i++){
        console.log(i)
    }
    // console.log(i) // <- i is an error b/c let only defines variable inside of scope
                     // var will enclose varialbe to the nearest function
}

let a: number
let b: boolean
let c: string
let d: number[]

enum Color {Red=0, Green=1, Blue=2}
let bgColor = Color.Green

let sample_txt
sample_txt = 'abc' //here type is any
//type assertion to convert to string
let endsWithC = (<string>sample_txt).endsWith('c')
//or use type assertion this way
let alternativeWay = (sample_txt as string).endsWith('c')

//use arrow function
let doLog = (message: string) => {
    console.log(message)
}


