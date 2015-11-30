function ArithGeo(arr){
  function arith(arr){
    var dif = arr[1]-arr[0];
    return arr.reduce((pre,cur,i,ray) =>
      (pre) ? (dif === (ray[i]-ray[i-1])) :false );
  };
  function geo(arr){
     var div = arr[1]/arr[0];
     return arr.reduce((pre,cur,i,ray) =>
      (pre) ? (div === (ray[i]/ray[i-1])) :false );
  };
  return (arith(arr)) ? "Arithmetic" :
   (geo(arr)) ? "Geometric" : -1;
};
