// Write a JavaScript program to find the largest element in a nested array.
//
let arr1 = [
	[3, 4, 58],
	[709, 8, 9, [10, 11]],
	[111, 2],
];
console.log("largest number is :>> ", Math.max(...arr1.flat(Infinity)));
