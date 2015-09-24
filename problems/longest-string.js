'use strict';

function longestString(arr) {
  var longestString = '';
  var currentString = '';
  
  for (var i = 0; i < arr.length; i++)
  {
    currentString = arr[i];
    if (typeof currentString === 'string')
    {

      if (currentString.length > longestString.length)
      {
        longestString = currentString;
      }
    }
  }
  return longestString;
}

module.exports = longestString;
