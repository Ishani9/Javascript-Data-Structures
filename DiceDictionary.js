let dice = new Map([[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0]]);

do {
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    dice.set(diceNumber, dice.get(diceNumber) + 1);
} while (dice.get(diceNumber) != 10);

//Map Traversal
console.log("Printing Dice map")
for (let entry of dice) {
    console.log(entry);
}

//sorted Map accroding to the value on each key
var counts = Array.from(dice.values());
var max = Math.max(...counts);
var min = Math.min(...counts);
console.log("Max count : " + max);
console.log("Min count : " + min);

//Finding dice number which reached max and min times

console.log("Dice Number with Max counts  ");
dice.forEach((value, key) => {
    if (value == max) {
        console.log("IS : "+ key + " --> "  + value + "  TIMES ");
    }
})

console.log("Dice Number with MIN counts  ");
dice.forEach((value, key) => {
    if (value == min) {
        console.log("IS : "+ key + " --> "  + value + "  TIMES ");
    }
})
