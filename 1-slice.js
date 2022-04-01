function slice(array, start, end) {
  let slicedArray = [];
  for (let i = start; i < end; i++) {
    slicedArray.push(array[i]);
  }
  return slicedArray;
}

module.exports = { slice };



Ligne 1 = 3
Ligne 2 = 2
Ligne 3 = 6
Ligne 4 = 4
T1(n) = 3 + 2r(6) + 4
O(n) = n = compléxité linéaire.
