function LongestWord(str) {
	var words = str.split(" ");
	
	return words.sort((a,b) => b.length - a.length)
    .shift();
}
