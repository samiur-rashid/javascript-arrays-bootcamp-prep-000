var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function accessElementInArray(chocolateBars,n) {
  return chocolateBars[n];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift()
  return chocolateBars
}

function removeElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.slice(1)
  return chocolateBars
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop()
  return chocolateBars
}
