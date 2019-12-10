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














