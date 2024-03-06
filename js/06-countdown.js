let startNumber;

do {
    startNumber = parseInt(prompt("Enter number to countdown from."));
} while (isNaN(startNumber));

for (let i = startNumber; i >= 0; i--) {
    console.log(i);
}