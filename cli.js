var BasicCard = require('./BasicCard'); 
var ClozeCard = require('./ClozeCard');

var bc = new BasicCard("What was Willie Mays' nickname?", "The Say Hey Kid");
console.log("Front of Card: " + bc.front + "\nBack of Card: " + bc.back);

var cc = new ClozeCard("Valentina Tereshkova was the first woman to go into space", "Valentina Tereshkova");
console.log("Complete Sentence: " + cc.text + "\nPartial Sentence: " + cc.partial + "\nDeleted: " + cc.cloze);
