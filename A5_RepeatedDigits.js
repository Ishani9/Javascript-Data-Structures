{  
    let numArray = new Array();
    for(num=1; num<=99; num++){
        if(num%10 == (Math.floor(num/10) % 10))
            numArray.push(num);
    }
    console.log(" digits that are repeated twice : " + numArray);
}