// Anagrams
function getAllPermutations(str) {
  let results = []

  if (str.length === 1) {
    results.push(str)
    return results
  }

  for (let i = 0; i < str.length; i++) {
    let firstChar = str[i]
    let charsLeft = str.substring(0, i) + str.substring(i + 1)
    let innerPermutations = getAllPermutations(charsLeft)
    for (let j = 0; j < innerPermutations.length; j++) {
      results.push(firstChar + innerPermutations[j])
    }
    return results
  }
}

getAllPermutations('east')

// Time complexity: Polynomial time, running time is unput raised to some power, nested loops