function findPairs(ar, find, pairs) {
     if (ar.length > 0) {
          let newArr = ar;
          // console.log(...newArr.slice(0, newArr.indexOf(find)));
          // console.log(...newArr.slice(newArr.indexOf(find) + 1));
          if (newArr.indexOf(find) > -1) {
               pairs++;
               
               newArr = [...newArr.slice(0, newArr.indexOf(find)),
                    ...newArr.slice(newArr.indexOf(find) + 1)
               ];
          }
          return findPairs(
               newArr.slice(1),
               newArr[0],
               pairs
          );
     }
     return pairs;
}


function sockMerchant(n, ar) {
     const min = 1;
     const max = 100;
     ar = (typeof ar === "string") ? ar.split(' ') : ar;
     if (ar.length >= min &&
          ar.length <= max &&
          n === parseInt(n, 0) &&
          n >= min &&
          n <= max &&
          n === ar.length) {
          return findPairs(ar.slice(1), ar[0], 0);
     }
     // if does not meet criteria return 0
     return 0;
}
// console.log(sockMerchant(10, [3,2,2,1,1,4,5,6,2,4]));