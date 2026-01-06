

const express = require('express');

const app = express();

app.get('/greetings/:name', (req,res) => {
    res.send(`hello there, ${req.params.name}!`);
});

app.get('/roll/:number', (req,res) => {

    let rollNumber = req.params.number;

    if (isNaN(rollNumber) === true) {
        res.send('You must specify a number.');
    } else {
    let random = Math.floor(Math.random() * (rollNumber + 1));
    res.send(`You rolled a ${random}`);
    }
});

  const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

app.get('/collectibles/:index', (req,res) => {
     const index = req.params.index;
     if (index < 0 || index >= collectibles.length) {
        res.send('This item is not in stock, check back soon!');
     } else {
        let collectible = collectibles[index];
         res.send(`So you want the ${collectible.name}? For ${collectible.price}, it can be yours!`);
     };
});

//   const shoes = [
//       { name: "Birkenstocks", price: 50, type: "sandal" },
//       { name: "Air Jordans", price: 500, type: "sneaker" },
//       { name: "Air Mahomeses", price: 501, type: "sneaker" },
//       { name: "Utility Boots", price: 20, type: "boot" },
//       { name: "Velcro Sandals", price: 15, type: "sandal" },
//       { name: "Jet Boots", price: 1000, type: "boot" },
//       { name: "Fifty-Inch Heels", price: 175, type: "heel" }
//   ];
 
// app.get('/hello', (req, res) => {
//     res.send(`Hello there, ${req.query.name}! I hear you are ${req.query.age} years old!`);
// });

// app.get('/shoes', (req,res) => {
//   const minPrice = req.query['min-price'];
//   const maxPrice = req.query['max-price'];
//   const type = req.query['type'];
//   console.log(minPrice,maxPrice,type)
//   const filteredShoes = shoes
//   .filter(shoe => !type || shoe.type === type)
//   .filter(shoe => !minPrice || minPrice <= shoe.price)
//   .filter(shoe => !maxPrice || maxPrice >+ shoe.price)
//   res.send(filteredShoes);
// })

app.listen(3000, () => { console.log('listening on port 3000'); })