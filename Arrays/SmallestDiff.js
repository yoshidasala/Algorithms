function smallestDifference(arr1, arr2) {
    let smallest = Infinity;
    let num1;
    let num2;
  
    for (let i = 0; i < arr1.length; i++){
      for (let j = 0; j < arr2.length; j++){
        if (Math.abs(arr1[i] - arr2[j]) < smallest){
          smallest = Math.abs(arr1[i] - arr2[j])
          num1 = arr1[i]
          num2 = arr2[j]
        }
      }
    }
    return [num1,num2]
  
  }