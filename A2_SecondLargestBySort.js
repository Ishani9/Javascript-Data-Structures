let numArray = new Array();
for(let i=0; i<10; i++){
    let num = Math.floor(Math.random()*1000);
    numArray.push(num);
}
console.log("ARRAY IS : " + numArray);

let sortedArray = new Array();
sortedArray = numArray.slice(0).sort();
console.log("SORTED ARRAY IS : " + sortedArray);

let max2 = sortedArray[8];
let min2 = sortedArray[1];
console.log("SECOND LARGEST : " + max2);
console.log("SECOND SMALLEST : " + min2);

