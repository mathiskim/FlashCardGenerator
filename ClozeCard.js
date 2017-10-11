// The cloze can be found in front of the sentence, at the end of the sentence 
// or in the middle of the sentence.  The array resulting from the split will consist
// of two entries. If the cloze is at the front of the sentence, the length of the 
// the entry at index 0 will be 0. If the cloze is at the end of the sentence the length of
// the entry at index 1 will be 0. If the cloze is in the middle, the length of each of the
// two entries will be greater than 0.

function ClozeCard(text, cloze) {
   if (this instanceof ClozeCard){
	this.text = text;
	this.cloze = cloze;
	var result = text.split(cloze);
	this.partial = "";

	if (result[0].length === 0) {
		this.partial = "..." + result[1];
		} else if (result[1].length === 0) {	          
			this.partial = result[0] + "...";
			} else {
				this.partial = result[0] + "..." 
				+ result[1];
			}	

//	console.log("result is " + partial);
	} else {
		return new ClozeCard(text, cloze);
	}
}
module.exports = ClozeCard;
//var nc = new ClozeCard("G. W. was the first prez of the US.", "G. W.");
//console.log(nc.partial);