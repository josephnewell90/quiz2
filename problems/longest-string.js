'use strict';

function longestString(arr) {
  var longestString = '';
  var currentString = '';
  for (var i = 0; i < arr.length; i++)
  {
    currentString = arr[i];
    console.log(currentString);
    if (typeof currentString === 'string')
    {
      longestString += arr[i];
    }
    console.log(longestString);
  }
}

module.exports = longestString;
