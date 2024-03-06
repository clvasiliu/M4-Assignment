for (let i = 1; i <= 100; i++) {
    let marcoPoloString = "";
    if (i % 3 === 0) {
        marcoPoloString += "Marco!";
    }
    if (i % 5 === 0) {
        if (marcoPoloString.length !== 0) {
            marcoPoloString += " ";
        }
        marcoPoloString += "Polo!";
    }
    if (marcoPoloString.length === 0) {
        marcoPoloString += i;
    }
    console.log(marcoPoloString);
}