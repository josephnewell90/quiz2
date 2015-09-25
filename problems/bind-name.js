'use strict';

function bindName(firstName, lastName, func) {
  var fullName = firstName + " " + lastName;
  var greetingBind = func.bind(null, fullName);
  return greetingBind;
}

module.exports = bindName;
