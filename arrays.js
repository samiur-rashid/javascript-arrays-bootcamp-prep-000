var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function accessElementInArray(chocolateBars,n) {
  return chocolateBars[n];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift()
  return chocolateBars
}
