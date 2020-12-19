// Basic math formulaas
function addition(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

function subtraction(num1, num2) {
  let difference = num1 - num2;
  return difference;
}

function multiplication(num1, num2) {
  let repeat = num1 * num2
  return repeat;
}

function division(num1, num2) {
  let repeatUndo = num1 / num2;
  return repeatUndo;
}

// Area formulaas
function areaSquare(side) {
  let areaSq = side * side;
  return areaSq;
}

function areaRectangle(length, width) {
  let areaRec = length * width;
  return areaRec;
}

function areaParallelogram(base, height) {
  let areaPara = base * height;
  return areaPara;
}

function areaTriangle(base, height) {
  let areaTri = (base * height) / 2;
  return areaTri;
}

function Circle(radius) {
  let areaCir = 3.14 * (radius * radius);
  return areaCir;
}

function Sphere(radius) {
  let areaSpr = 4 * 3.14 * (radius * radius);
  return areaSpr;
}

// Surface Area formulas
function surfaceAreaCube(side) {
  let cubeSurfArea = 6 * (side * side);
  return cubeSurfArea;
}

function surfaceAreaCylinder(radius, height) { 
  let cynSurfArea = 2 * 3.14 * radius * height;
  return cynSurfArea;
}

// Perimeter formulas
function perimeterSquare(side) {
  let sqrPerimeter = 4 * side;
  return sqrPerimeter;
}

function perimeterRectangle(length, width) {
  let recPerimeter = 2 * (length + width );
  return recPerimeter;
}

function perimeterTriangle(side1, side2, side3) {
  let triPerimeter = side1 + side2 + side3;
  return triPerimeter;
}

function perimeterCircle(diameter) {
  let circumference = 3.14 * diameter;
  return circumference;
}

// Volume formulas
function volumeCube(side) {
  let cubeVol = side * side * side;
  return cubeVol;
}

function volumeRectangular(length, width, height) {
  let recVol = length * width * height;
  return recVol;
}

function volumeCylinder(radius, height) {
  let cynVol = 3.14 * (radius * radius) * height;
  return cynVol;
}
