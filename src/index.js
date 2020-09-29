
exports.min = function min (array) {
    let minItem = 0;
    let newArray =[];
    if (!array || array.length === 0){
        return 0;
        } else
        newArray = array.sort( (a, b) => a - b );
        minItem = newArray[0];
        return minItem;
    }


exports.max = function max (array) {
    let maxItem = 0;
    let newArray =[];
    if (!array || array.length === 0){
        return 0;
    } else
        newArray = array.sort( (a, b) => a - b );
        maxItem = newArray[newArray.length-1];
        return maxItem;
    }


exports.avg = function avg (array) {
    let sum = 0;
    let n = 0;
    let avg = 0;
    if (!array || array.length === 0){
        return 0;
    } else
      for (i=0; i<array.length; i++){
            sum += array[i];
            n++;}
        return avg = sum/n;
}


