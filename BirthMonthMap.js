{
    let birthMonthMap = new Map([[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [10, 0], [11, 0], [12, 0]]);

    for (let person = 0; person < 50; person++) {
        let monthOfBirth = Math.floor(Math.random() * 12) + 1;
        birthMonthMap.set(monthOfBirth, birthMonthMap.get(monthOfBirth) + 1);
    }
    console.log("Printing monthOfBirth Map of 50 Individuals")
    for (let entry of birthMonthMap) {
        console.log(entry);
    }
}