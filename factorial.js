// Factorial

const factorial = (num) => {
  if (num === 1) {
    return num
  }
  return num * factorial(num - 1)
}

factorial(5)

// Time complexity: Logarithmic time, takes longer with larger input, but cuts problem size
// in half with each iteration