/*EASY: Write a function that would allow you to do this:
var run = exercise('running');
console.log(run()); // prints "Today's exercise: running"
var swim = exercise('swimming');
console.log(swim()); // prints "Today's exercise: swimming"*/
'use strict';

var run = exercise('running');
var swim = exercise('swimming');

function exercise(exerciseType) {
    return ` Today's exercise is ${exerciseType}`
}

console.log(exercise(run));
console.log(exercise(swim))
