let numArray = new Array();
for(let i=0; i<10; i++){
    let num = Math.floor(Math.random()*1000);
    numArray.push(num);
}
console.log("ARRAY IS : " + numArray);
let maxNum = numArray[1];
let minNum = numArray[1];
let max2 = numArray[1];
let min2 = numArray[1];

for(let element of numArray){ 
    maxNum = Math.max(element,maxNum);
    minNum = Math.min(element,minNum);
}
for(let element of numArray){
    max2 = (element<maxNum && element>max2) ? element:max2;
    min2 = (element>minNum&&element<min2) ? element:min2;
}
console.log("SECOND LARGEST : " + max2);
console.log("SECOND SMALLEST : " + min2);