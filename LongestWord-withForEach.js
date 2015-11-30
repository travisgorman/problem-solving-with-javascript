function LongestWord(str){
	var arr = str.split(' '), longest = '';

	arr.forEach(word =>
	  longest = (word.length > longest.length) ?
        word : longest);
	
	return longest;
}
