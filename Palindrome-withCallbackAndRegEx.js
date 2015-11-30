function isPalindrome(str) {
  var xws = str.replace(/\s/g, '');
    function reverseString(str) {
  	  var tmp = '',i;
  	
      for(i= str.length-1; i>=0; i--) {
  		tmp += str.charAt(i)
  	  }

  	  return tmp;
  }
  return (xws === reverseString(xws));
}
