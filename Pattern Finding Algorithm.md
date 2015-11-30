ArithGeo - Pattern Finding Algorithm
=====================================
In this challenge, we need to design a pattern recognition algorithm. 

The array of integers passed into our function either adheres to one of two different patterns, or none at all. Let's take a look at our 3 possible outcomes. 

## Arithmetic Pattern
Our function returns the string "Arithmetic" if a series of addition is detected, as in the example below, where each number shares a common difference: 5.

                            `[10, 15, 20, 25, 30]`  -> "Arithmetic"

## Geometric Pattern
When a common quotient exists, we get returned the string "Geometric". Each number in the series is multiplied by the same number as the one before. Here we see a geometric pattern. Divide each number by the number that came before, and you get 3.

                            `[3, 9, 27, 81, 243]`  -> "Geometric"

## Neither
If neither of these two patterns are detected, the function returns the number -1. In solving this problem, I will explore callback functions, closure and iteration. 

                            `[46, 2, 19, 32, 15]`  -> -1 

# With a Higher-Order Function
Here, by creating a custom callback function, `isPattern`, that detects *generic* patterns between numbers in a collection, we can tell it what we're looking for when we call back to it. This is the most versatile, since the callback function is not limited to arithmetic and geometric patterns. Since the callback just looks at relationships between numbers in a series, we can plug in any type of pattern we want to look for. 
```js
function ArithGeo(arr){
  function isPattern(arr, pTest){
    var factor = 0, match = true, i;
    for (i = 0; i < arr.length -1 && match; i++){
      if (i === 0) {
        factor = pTest(arr[i],arr[i+1]);
      } else if (factor !== pTest(arr[i],arr[i+1])){
        match = false
      } };
    return match;
  };
  while (arr && arr.length > 2){
    return (isPattern(arr, (a,b) => a-b)) ? 'Arithmetic' :
              (isPattern(arr, (a,b) => b/a)) ? "Geometric" : -1
  };
}     
```
# With Closure
Setting up two inner-functions, and then using them both in a nested conditional expression is an interesting way to solve this with closure. 
```js
function ArithGeo(arr){
  
  function arith(arr){
    var dif = arr[1]-arr[0];
    return arr.reduce((pre,cur,i,ray) =>
      (pre) ? (dif === (ray[i]-ray[i-1])) :false );
  }

  function geo(arr){
     var div = arr[1]/arr[0];
     return arr.reduce((pre,cur,i,ray) =>
      (pre) ? (div === (ray[i]/ray[i-1])) :false );
  }

  return (arith(arr)) ? "Arithmetic" :
   (geo(arr)) ? "Geometric" : -1;
}
```

And of course, regular old boring loops and conditionals
# Iteration 
```js
function ArithGeo(arr) {
var dif = arr[1]-arr[0],
div = arr[1]/arr[0], arith, geo, i;

  for (i=0; i<arr.length-1; i++){
    if (dif + arr[i] === arr[i+1]){
      arith = true;
    } else {
      arith = false;
      break;
    }
  }
  for (i=0; i<arr.length-1; i++){
    if (div * arr[i] === arr[i+2]) {
      geo = true;
    } else {
      geo = false;
    }
  }
  if (arith === true) {
      return "Arithmetic";
    } else if (geo === true) {
      return "Geometric";
    } else {
      return -1;
    }
}
```
