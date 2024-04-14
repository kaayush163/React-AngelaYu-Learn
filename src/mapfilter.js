var numbers = [3, 56, 2, 48, 5];

function double(x) {
  return x * 2;
}

const newarray = numbers.map(double);

var newNumbers = [];

function double(x) {
  newNumbers.push(x * 2);
}

numbers.forEach(double);

//or

numbers.forEach(function double(x) {
  newNumbers.push(x * 2);
});

//Using map is very much concise than foreach because it return overaall a new array

const newmapNumbers = numbers.map(function (x) {
  return x * 2;
});

console.log(newmapNumbers);

var filterNumber = [3, 56, 48, 2, 5];
const newfilter = numbers.filter(function (num) {
  return num > 10;
});
cosnole.log(newfilter);

numbers.forEach(function (num) {
  if (num < 10) {
    newNumbers.push(num);
  }
});

var reduceNumber = [3, 56, 2, 48, 5];

var count = 0;

reduceNumber.forEach(function (curr) {
  count += curr;
});

var newreduce = reduceNumber.reduce(function (accumulator, curr) {
  return accumulator + curr;
});

const findnum = numbers.find(function (i) {
  return i > 10;
});

const findIndex = numbers.findIndex(function (num) {
  return num > 10;
});
//return index of elemnet which value is greated thean 10

//Truncate every message to 100 length substrings so we use .substring(0,100)
import emojipedia from "./emojipedia";

const newEmojipedia = emojipedia.map(function (emoji) {
  return emoji.meaning.substring(0, 100);
});
console.log(newEmojipedia);
