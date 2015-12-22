##`LongestWord()` 
>*Have the function `LongestWord(sen)` take the `sen` parameter being passed and return the largest word in the string.* 
>*If there are two or more words that are the same length, return the first word from the string with that length.*  
>*Ignore punctuation and assume sen will not be empty.*  

### My Solution with `split()`, `forEach()` and ternary conditional expression
```js
function LongestWord(sen){
  var arr = sen.split(' '), longest = '';

  arr.forEach(word =>
    longest = (word.length > longest.length) ?
        word : longest);
  
  return longest;
}
```

* Using the string method `split()`, turn `sen` into an array of words by using whitespace as a separator
* Call `split()` on `sen`, with whitespace as the separator to turn sen into an array of words.
  - Declare variable `arr` and assign the split array of words. 
  - Declare variable `longest`: an empty string. 
* Call `forEach()` on `arr` taking each `word` and
  -  when the `word` is longer than `longest` 
  -  `longest` equals that word. 
  -  each word is assigned to `longest` until it's replaced by a longer word
  -  When there are no more words -- if the current word isn't longer than `longest`
  -  then `longest` holds the longest word
* Return `longest`
