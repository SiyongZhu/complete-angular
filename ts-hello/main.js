function log(message) {
    console.log(message);
}
var message = "Hello sy";
log(message);
function loopthru() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    // console.log(i) // <- i is an error b/c let only defines variable inside of scope
    // var will enclose varialbe to the nearest function
}
var a;
var b;
var c;
var d;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var bgColor = Color.Green;
var sample_txt;
sample_txt = 'abc'; //here type is any
//type assertion to convert to string
var endsWithC = sample_txt.endsWith('c');
//or use type assertion this way
var alternativeWay = sample_txt.endsWith('c');
//use arrow function
var doLog = function (message) {
    console.log(message);
};
