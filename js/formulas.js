// Basic math formulas
function addition(num1, num2) {
  let sum = num1 + num2
  return sum;
}
//addition (-2,1)
//-1

function subtraction(num1, num2){
  let difference = num1 - num2
  return difference;
}
// subtraction(4,5)
// -1


function multiplication(num1, num2) {
  let answer = num1 * num2
  return answer;
}
// multiplication (3,4)
// 12


function division(num1, num2) {
  let answer = num1/ num2
  return answer;
}
// division (12,4)
// 3

// Area formulas
function areaSquare(side){
  let answer = side * side
  return answer;
}
// areaSquare (10)
// 100

function areaRectangle(length, width) {
  let answer = length * width
  return answer;
}
// areaRectangle(4, 5)
// 20


function areaParallelogram(base, height){
  let answer = base * height
  return answer;
}
// areaParallelogram(8,6)
// 48

function areaTriangle(base, height){
  let answer = (1/2) * base * height
  return answer;
}
// areaTriangle (3, 4)
// 6

function Circle(radius){
  let answer = (radius * radius) * Math.PI
  return answer;
}
// Circle(4);
// 50.26548245743669


function Sphere(radius){
let answer = (radius * radius) * 4 * Math.PI
  return answer;
}
// Sphere(5);
// 314.1592653589793

// Surface Area formulas
function surfaceAreaCube(side){
 let answer = 6 * (side * side)
  return answer;
}
// surfaceAreaCube(7);
// 294

function surfaceAreaCylinder(radius, height){
  let answer = 2 * Math.PI * radius * height
  return answer;
}
// surfaceAreaCylinder(3,7);
// 131.94689145077132

// Perimeter formulas
function perimeterSquare(side){
  let answer = 4*side
  return answer;
}
// perimeterSquare (16);
// 64

function perimeterRectangle(length, height){
  let answer = 2*length +  2*height
  return answer;
}
//perimeterRectangle(2,3)
//10


function perimeterTriangle(side1, side2, side3){
  let answer = side1 + side2 + side3
  return answer;
}
// perimeterTriangle(2,3,4)
// 9


function perimeterCircle(diameter){
  let answer = Math.PI*diameter
  return answer;
}
// perimeterCircle(12)
// 37.69911184307752

// Volume formulas
function volumeCube(side){
  let answer = side * side * side
  return answer;
}
// volumeCube(2)
// 8

function volumeRectangular(length, width, height){
  let answer = length*width*height
  return answer;
}
// volumeRectangular(4,5,6)
// 120

function volumeCylinder(radius, height){
  let answer = Math.PI * (radius * radius) * height
  return answer;
}
// volumeCylinder(6,7)
//791.6813487046279
