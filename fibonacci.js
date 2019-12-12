// Fibonacci
const fibonacci = (num) => {
  if (num < 2) {
    return num
  }
  return fibonacci(num - 1) + fibonacci(num - 2)
}

fibonacci(7)

// Time complexity: Exponential time, running times grow rapidly with any increase in input size

