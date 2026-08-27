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
