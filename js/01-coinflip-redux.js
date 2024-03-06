let coinFlip;
let numFlips = parseInt(prompt("Enter number of flips."));

while (isNaN(numFlips)) {
    numFlips = parseInt(prompt("Invalid entry. Please enter number of flips."));
}

for (let i = 0; i < numFlips; i++) {
    coinFlip = Math.round(Math.random());
    if (coinFlip === 0) {
        console.log("Heads");
    } else {
        console.log("Tails");
    }
}
