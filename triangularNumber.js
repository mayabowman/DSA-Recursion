// Triangular Number
const triangularNumber = (n) => {
  if (n === 1) {
    return 1
  }
  return n + triangularNumber(n -1)
}

triangularNumber(4)

// Time complexity: Exponential time, running times grow rapidly with any increase in input size