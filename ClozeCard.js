// The cloze can be found in front of the sentence, at the end of the sentence 
function ClozeCard(text, cloze) {
   if (this instanceof ClozeCard){       //if this function was called using the "new" keyword
	this.text = text;
	this.cloze = cloze;
	this.partial = "";

	if (this.text.toLowerCase().includes(this.cloze.toLowerCase())){            //"includes" is case-sensitive
		this.partial = this.text.replace(cloze, '...');                                  // replace the cloze portion with "..."
	} else {
		return console.log("Text to delete, " + this.cloze + ", must appear in the full text, " + this.text);
	}

   } else {
		return new ClozeCard(text, cloze);    // this is executed if the constructor was not called using the "new" keyword
   }
};

module.exports = ClozeCard;

//var nc = new ClozeCard("G. W. was the first prez of the US.", "G. W.");
//console.log(nc.partial);