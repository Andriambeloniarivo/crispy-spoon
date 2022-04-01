function arrayContain(array, number) {                                Ligne 1 = 4
  for (let i = 0; i < array.length; i++) {                            Ligne 2 = 7
    if (array[i] === number) {                                        Ligne 3 = 4
      return true;                                                    Ligne 4 = 1
    }
  }
  return false;                                                       Ligne 7 = 1
}

module.exports = { arrayContain };                                    Ligne 10 = 2
                                                                T3(n) = 4 + 7r(4+1) + 1 = 1 + r(1) + 1
                                                                O(n) = n = compléxité linéaire.
