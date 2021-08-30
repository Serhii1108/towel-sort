module.exports = function towelSort (matrix) {
  if (!matrix) {
    return []
  }

  let result = []
  for (let i = 0; i < matrix.length; i++) {
    if ((i % 2) !== 0) {
      matrix[i].reverse()
    }
    for (let t = 0; t < matrix[i].length; t++) {
      result.push(matrix[i][t])
    }
  }
  return result
}
