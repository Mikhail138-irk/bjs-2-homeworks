"use strict"

// Задание 1
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2-4*a*c;
  if (d > 0) {
    arr[0] = (-b + Math.sqrt(d))/(2*a);
    arr[1] = (-b - Math.sqrt(d))/(2*a);
  } else if (d == 0) {
    arr[0] = -b/(2*a);
  }
  return arr;
}

solveEquation(1, 5, 4)