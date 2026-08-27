console.log(
    "-------------- Coding Challange #1: BMI Calculator -----------------",
);
// const markWeight = 78;
// const markHeight = 1.69;

// const johnWeight = 92;
// const johnHeight = 1.95;

const markWeight = 95;
const markHeight = 1.88;

const johnWeight = 85;
const johnHeight = 1.76;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;
console.log("Marks BMI is: ", markBMI);
console.log("John BMI is: ", johnBMI);

const markHigherBMI = markBMI > johnBMI;
console.log("Does mark has higher BMI than john?", markHigherBMI);

console.log(
    "-------------- Coding Challange #2: BMI Calculator (extend) -----------------",
);
// This is the extended version of the challange #1, so the data will be borrowed from #1
if (markBMI > johnBMI) {
    console.log(
        `Marks BMI is ${markBMI}, which is higher than Johns BMI ${johnBMI}`,
    );
} else {
    console.log(
        `Johns BMI is ${johnBMI}, absolutely higher than Marks BMI ${markBMI}`,
    );
}

console.log(
    "-------------- Coding Challange #3: Competition Winner -----------------",
);
const calcDolphinAverage = (96 + 108 + 89) / 3;
// const calcDolphinAverage = (97 + 112 + 101) / 3;
// const calcDolphinAverage = (97, 112, 101) / 3;

const calcKoalaAverage = (88 + 91 + 110) / 3;
// const calcKoalaAverage = (109 + 95 + 123) / 3;
// const calcKoalaAverage = (109 + 95 + 106) / 3;

console.log(calcDolphinAverage, calcKoalaAverage);
if (calcDolphinAverage > 100 && calcDolphinAverage > calcKoalaAverage) {
    console.log(
        `Yey! Dolphine scored ${calcDolphinAverage}. Wins over Koalas.`,
    );
} else if (calcKoalaAverage > 100 && calcKoalaAverage > calcDolphinAverage) {
    console.log(`Koala scored ${calcKoalaAverage} and they won.`);
} else {
    console.log(
        `Both team scored below the requirement point 100. Doesn't qualify for the competition.`,
    );
}

console.log(
    "------------------- Coding Challange #3: Let's create a tip calculator ---------------",
);
// Lets make this project with plain if/else and also with ternary operator.
const billValue = 275;
// const billValue = 40;
// const billValue = 430;
if (billValue < 50) {
    console.log(`Your bill is only ${billValue}. No need to tip.`);
} else if (billValue >= 50 && billValue <= 300) {
    // 20% tip
    console.log(
        `Your bill is ${billValue}. You have to pay ${billValue * 0.2} in tip and your total is ${billValue + billValue * 0.2}`,
    );
} else {
    // 15% tip
    console.log(
        `Your bill is ${billValue}. You have to pay ${billValue * 0.15} in tip and your total is ${billValue + billValue * 0.15}`,
    );
}
