var BasicCard = require('./BasicCard'); 
var ClozeCard = require('./ClozeCard');
var inquirer = require('inquirer');
var fs = require('fs');
var bbcard = {question: []};


function createBasicCard(){
   inquirer.prompt([
    {
      type: 'input',
      name: 'front',
      message: 'Please enter the front of the flashcard (the question).',      
    },
    {
      type: 'input',
      name: 'back',
      message: 'Please enter the back of the flashcard (the answer).',      
    }     
  ])
  .then(function(response) {

      var nbCard = new BasicCard(response.front, response.back);
      bbcard.question.push(nbCard);
//      console.log(bbcard.question);
	 fs.writeFile("flashCards.txt", JSON.stringify(bbcard, null, 2), function(err) {
	if (err){
		return console.log(err);
	 }  else {
		 menu();
	}
  });
});
};

function createClozeCard(){
   inquirer.prompt([
    {
      type: 'input',
      name: 'front',
      message: 'Please enter the full text of the statement/fact.',      
    },
    {
      type: 'input',
      name: 'cloze',
      message: 'Please enter the text to be deleted.',      
    }     
  ])
  .then(function(response) {
  //   console.log("Front of Card: " + response.front + "\nDeleted Text " + response.cloze);
     var ncCard = new ClozeCard(response.front, response.cloze);
  //   console.log("nc.front " +  ncCard.front + "\nnc.cloze " + ncCard.cloze + "\nnc.partial " + ncCard.partial );

     bbcard.question.push(ncCard);
     fs.writeFile("myflashCards.txt", JSON.stringify(bbcard, null, 2), function(err) {
	   if (err){
		return console.log(err);
	   }  else {
		menu();
		}
  });
});
};


function readMyFile(){
//console.log(bbcard.question);
//console.log(bbcard);
	fs.readFile("./myflashCards.txt", "utf-8", function(err, data){	
          var qArray = JSON.parse(data, null, 2);
     //     console.log(qArray);
     //     console.log(qArray.question.length);
          for (var i = 0; i < qArray.question.length; i++){
          	  if (Object.keys(qArray.question[i])[1] === "back"){
          		var output = "\nQuestion " + (parseInt(i) +parseInt(1)) + " Front: " + qArray.question[i].front;
          		output += "\n 	   Back:  "  +  qArray.question[i].back;
          		console.log(output); 
          	  } else {
          	  	  var output = "\nQuestion " + (parseInt(i) +parseInt(1)) + " Text: " + qArray.question[i].text;
          		  output += "\n 	   Cloze:  "  +  qArray.question[i].cloze;
          		  output += "\n           Partial: " +  qArray.question[i].partial;
          		  console.log(output); 
          	  }
          }
	});
 };	

  
  function menu(){
  	 inquirer.prompt([
    {
       type: "list",
      message: "What would you like to do?",
      choices: ["Create basic flashcard", "Create cloze flashcard",  "See all the flashcards I entered", "exit"],
      name: "menuSelection"       
    },
    ])
  .then(function(response) {
//  	console.log("menu response " + response.menuSelection);
  	switch(response.menuSelection) {
    case "Create basic flashcard":
        createBasicCard();
        break;
    case "Create cloze flashcard":
        createClozeCard();
         break;            
    case "See all the flashcards I entered":
         readMyFile();
        break;
    case "exit":
         return;
        break;
    default:
        console.log("I don't understand. Please try again");
  }  //end of switch
});
};

menu();
