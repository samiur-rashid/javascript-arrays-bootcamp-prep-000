var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function destructivelyAddElementToBeginningOfArray(chocolateBars, newElement) {
  chocolateBars.unshift(newElement)
  return chocolateBars
}

function addElementToBeginningOfArray(chocolateBars, newElement) {
  const chocolateBars
  const newChocolateBars = [newElement, ...chocolateBars]
}

function accessElementInArray(n) {
  return chocolateBars[n]
}
