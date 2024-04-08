// import React from "react";

const pi = 3.1415962;

function doublePi() {
  return pi * 2;
}

function triplePi() {
  return pi * 3;
}
function add(n1, n2) {
  return n1 + n2;
}

function mult(n1, n2) {
  return n1 * n2;
}

function subt(n1, n2) {
  return n1 - n2;
}

function div(n1, n2) {
  return n1 / n2;
}

export default pi;
export { doublePi, triplePi };
export { add, subt, mult, div };
