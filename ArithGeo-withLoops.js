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
