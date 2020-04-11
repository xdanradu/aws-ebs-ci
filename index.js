"use strict";
var express = require("express");
var app = express();

const books = [
  {
      "author": "Chinua Achebe",
      "country": "Nigeria",
      "language": "English",
      "pages": 209,
      "title": "Things Fall Apart",
      "year": 1958
  },
  {
      "author": "Hans Christian Andersen",
      "country": "Denmark",
      "language": "Danish",
      "pages": 784,
      "title": "Fairy tales",
      "year": 1836
  },
  {
      "author": "Dante Alighieri",
      "country": "Italy",
      "language": "Italian",
      "pages": 928,
      "title": "The Divine Comedy",
      "year": 1315
  },
];

app.get("/", (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  res.json({ version: "v1" });
});


app.get('/books', (req, res) => {
  res.json(books);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});




