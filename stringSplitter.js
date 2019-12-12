// String Splitter
const stringSplitter = (str) => {
  if (str.length === 1) {
    return str
  }
  stringSplitter(str.slice(1))
  return[...str]
}

stringSplitter('split')

// Time complexity: Linear time, running time directly proportional to size of input