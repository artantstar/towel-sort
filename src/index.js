module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length === 0) {
    return []
  }

  return matrix.map((x, i) => {
    if (i % 2 === 0) return x
    else return x.reverse();
  }).flat()
}