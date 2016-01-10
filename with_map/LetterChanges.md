# Letter Changes
Have the function `LetterChanges(str)` take the `str` parameter being passed and modify it using the following algorithm. *Replace every letter in the string with the letter following it in the alphabet*
(ie. c becomes d, z becomes a).  

Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.

>>>#### LetterChanges(str) PseudoCode
* Replace each letter with its neighbor to the right
  - split `str` into an array
  - map over it passing a callback taking `c` as its element argument
    + if the letter is uppercase, make it lowercase
    + re-assign `c` the value of the charcter in the position one greater 
* Find all Vowels and Capitalize Them 
  - determine if letter is a vowel
    + call indexOf() on an array, ['a','e','i','o','u'];
    + if `c` is any of item in this array of vowels,
    + call toUpperCase() on it.
* join() to turn the array created by map() into a string. 

```js
function LetterChanges(str) {
// debugger;
  return str.split('')
            .map(function(c) {
              if (c.toUpperCase() != c.toLowerCase()) {
                c = String.fromCharCode(c.charCodeAt(0) + 1);
              }
              if (['a', 'e', 'i', 'o', 'u'].indexOf(c) > -1) {
                c = c.toUpperCase();
              }
              return c;
            }).join('');
}
```

The function is a return statement, with 3 method calls: split, map, and join.  
This is a the callback passed into map() This is what map projects onto every letter in the string. 

```js
    c => {
      if (c.toUpperCase() != c.toLowerCase()) {
        c = String.fromCharCode(c.charCodeAt(0) + 1);
      }
      if (['a', 'e', 'i', 'o', 'u'].indexOf(c) > -1) {
      c = c.toUpperCase();
      }
      return c;
      } )
     
```

___

