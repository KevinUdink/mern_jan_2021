// you can read more about map() at the following URL:
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map((x, index, origArr) => {
    console.log(x);
    console.log(index);
    console.log(origArr);
    return x * 2;
  });

console.log(map1);
// expected output: Array [2, 8, 18, 32]
