const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

// Array of numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }

  return true;
}

// Function to filter prime numbers
function filterPrimeNumbers(num) {
  return isPrime(num);
}

//Endpoint 1: Filter Prime Numbers
app.get('/prime-numbers', (req, res) => {
  let result = numbers.filter((num) => filterPrimeNumbers(num));
  res.json(result);
});

// Array of numbers
let num = [-10, -5, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Function to filter positive numbers
function filterPositiveNumbers(num) {
  return num > 0;
}

//Endpoint 2: Filter Positive Numbers
app.get('/positive-numbers', (req, res) => {
  let result = num.filter((num) => filterPositiveNumbers(num));
  res.json(result);
});

// Array of numbers
let num2 = [-10, -5, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Function to filter negative numbers
function filterNegativeNumbers(num) {
  return num < 0;
}

//Endpoint 3: Filter Negative Numbers
app.get('/negative-numbers', (req, res) => {
  let result = num2.filter((num) => filterNegativeNumbers(num));

  res.json(result);
});

// Array of numbers
let num3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Function to filter odd numbers
function filterOddNumbers(num) {
  return num % 2 !== 0;
}

//Endpoint 4: Filter Odd Numbers
app.get('/odd-numbers', (req, res) => {
  let result = num3.filter((num) => filterOddNumbers(num));

  res.json(result);
});

// Array of numbers
let num4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Function to filter numbers greater than a specified value
function filterNumbersGreaterThan(num, value) {
  return num > value;
}

//Endpoint 5: Filter Numbers Greater Than a Given Value
app.get('/numbers-greater-than', (req, res) => {
  let value = parseFloat(req.query.value);
  let result = num4.filter((num) => filterNumbersGreaterThan(num, value));

  res.json(result);
});

// Array of numbers
let num5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Function to filter numbers less than a specified value
function filterNumbersLessThan(num, value) {
  return num < value;
}

//Endpoint 6: Filter Numbers Less Than a Given Value
app.get('/numbers-less-than', (req, res) => {
  let value = parseFloat(req.query.value);
  let result = num5.filter((num) => filterNumbersLessThan(num, value));

  res.json(result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
