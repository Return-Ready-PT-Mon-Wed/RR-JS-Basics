// Basic math formulaas
function addition(num1, num2){
  let sum = num1 + num2;
  return sum;
}


function subtraction(num1, num2){
  let difference = num1 - num2;
  return difference;
}

function multiplication(num1, num2) {
let acc = num1*num2;
  return acc;

}

function division(num1, num2){
  let div = num1/num2;
  return div;
}

// Area formulaas
function areaSquare(side){
let A = side*side;
  return A;
}

function areaRectangle(length, width){
  let Rectangle = length*width;
  return Rectangle;
}
function areaParallelogram(base, height){
  let Parallelogram = base*height;
  return Parallelogram;
}

function areaTriangle(base, height){
  let Triangle = base*height*.5; 
  return Triangle;
}

function Circle(radius){
  let Circle = Math.PI * radius * radius;
  return Circle;
}

function Sphere(radius){
  let Sphere=4*Math.PI*radius*radius;
  return Sphere;
}

// Surface Area formulas
function surfaceAreaCube(side){
  let B=side*side*6;
  return B
}

function surfaceAreaCylinder(radius, height){
  let Cylinder = radius*height*Math.PI*2;
  return Cylinder
}

// Perimeter formulas
function perimeterSquare(side) {
let PS = 4*side;
  return PS
}

function perimeterRectangle(length, height){
  let PR = 2*length+ 2*height;
  return PR
}

function perimeterTriangle(side1, side2, side3){ 
  let PT = side1 + side2 + side3; 
  return PT
  

}

function perimeterCircle(diameter){
  let PC = diameter*Math.PI;
  return PC 
}

// Volume formulas
function volumeCube(side){
  let VC=side*side*side;
  return VC
}

function volumeRectangular(length, width, height){
  let VR = length*width*height;
  return VR
}

function volumeCylinder(radius, height){
  VC = Math.PI*radius*radius*height;
  return VC
}
