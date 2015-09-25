'use strict';

function arraySum(arr) {
  var sum = 0;
  var subSum = 0;
  var subArray = null;
  var arrayChecker = [];

  for (var i = 0; i < arr.length; i++)
  {
    subSum = 0;   //Reset the subSum
    arrayChecker = arr[i];
    if (Array.isArray(arrayChecker))
    {
      subArray = arr[i];
      for (var count = 0; count < subArray.length; count++)
      {
        subSum += parseInt(subArray[count], 10);
      }
      sum += parseInt(subSum, 10);
    }
    else {
      sum += arr[i];
    }
  }
  return sum;
}

module.exports = arraySum;
