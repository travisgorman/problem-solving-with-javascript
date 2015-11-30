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
