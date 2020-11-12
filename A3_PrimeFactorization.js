let num = parseInt(process.argv[2]);
console.log("NUMBER IS : " + num);
let factorArray = new Array();

for(let i = 1; i <= num; i++){
    if(num % i == 0){
        factorArray.push(i);
    }
}
console.log("FACTORS ARE : " + factorArray);
