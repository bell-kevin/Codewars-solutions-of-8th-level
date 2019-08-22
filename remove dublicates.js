// remove dublicates from array
let arr = [10, 2, -4, 10, 6, -4, 98 ];

//1
let arr1 = arr.filter(function(elem, index){
   return arr.indexOf(elem) === index;
});
console.log(arr1);

//2
let arr2 = [];
for (let i = 0; i < arr.length; i++){
  if (!arr2.includes(arr[i])) arr2.push(arr[i]);
}
console.log(arr2);