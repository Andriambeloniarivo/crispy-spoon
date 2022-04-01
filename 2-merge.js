function merge(array1, array2) {                                        
  let mergedArray = [];                                                  
  let i = 0;                                                              
  let j = 0;                                                              
  while (i < array1.length && j < array2.length) {                        
    if (array1[i] < array2[j]) {                                          
      mergedArray.push(array1[i]);                                        
      i++;                                                               
    } else {
      mergedArray.push(array2[j]);                                  
      j++;                                                                 
  }
  while (i < array1.length) {                                             
    mergedArray.push(array1[i]);                                           
    i++;                                                                  
  }
  while (j < array2.length) {                                              
    mergedArray.push(array2[j]);                                           
    j++;                                                                   
  }
  return mergedArray;                                                     
}

module.exports = { merge };                                                 

  
         Ligne 1 = 3
         Ligne 2 = 3
         Ligne 3 = 3
         Ligne 4 = 3
         Ligne 5 = 7
         Ligne 6 = 5
         Ligne 7 = 4
         Ligne 8 = 1
  
         Ligne 10 = 4
         Ligne 11 = 1   }
         Ligne 13 = 3
         Ligne 14 = 4
         Ligne 15 = 1
  
        Ligne 17 = 3
        Ligne 18 =  4
        Ligne 19 = 1
  
        Ligne 21 = 1


        Ligne 24 = 3

T2(n) = 3 + 3 r(3+3+7+5+4+1+4+1+3+4+1+3+4+1+1) + 3 = 1 + r (1) + 1 
O(n) = n = compléxité linéaire
