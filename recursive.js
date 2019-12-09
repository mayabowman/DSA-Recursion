// Counting Sheep
function countSheep(num) {
  if (num === 0) {
    console.log('All sheep jumped over the fence')
    return
  }
  countSheep(num -1)
  console.log('Another sheep jumped over the fence')
}

countSheep(3)

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

// Reverse String
function reverseString(string) {
  const arr = string.split('')

  if (arr.length === 1) {
    return arr[0]
  }

  return reverseString(arr.slice(1).join('')) + arr[0]
}

reverseString('reverse')

const triangularNumber = (n) => {
  if (n === 1) {
    return 1
  }
  return n + triangularNumber(n -1)
}

triangularNumber(4)