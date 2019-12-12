// Power Calculator
function powerCalculator(base, exp) {
  if (exp < 0) {
    return console.log('Exponent should be >= 0')
  }
  if (exp === 1) {
    console.log(base)
    return base * powerCalculator( base, (exp - 1))
  }
}

powerCalculator(3, 3)

// Time complexity: Linear Time, directly proportional to size of input