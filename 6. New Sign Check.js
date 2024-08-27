function newSignCheck(num1, num2, num3) {
    let newArr = [num1, num2, num3];
    let finalArr = [];
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] < 0) {
            finalArr.push(newArr[i]);
        }
    }
    if (finalArr.length % 2 === 0) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }
    console.log();
}
newSignCheck(-6,
    -12,
    14);