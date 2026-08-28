console.log(
    "----------- Codin Challange #1: ES6 function checkWinner ---------------",
);
let dolphineScore1 = 44;
let dolphineScore2 = 23;
let dolphineScore3 = 71;

// let koalaScore1 = 65;
// let koalaScore2 = 54;
// let koalaScore3 = 49;

// let dolphineScore1 = 85;
// let dolphineScore2 = 54;
// let dolphineScore3 = 41;
//
let koalaScore1 = 23;
let koalaScore2 = 34;
let koalaScore3 = 27;

const calcAvg = (data1, data2, data3) => (data1 + data2 + data3) / 3;

const dolphineAvg = calcAvg(dolphineScore1, dolphineScore2, dolphineScore3);
const koalaAvg = calcAvg(koalaScore1, koalaScore2, koalaScore3);
console.log(dolphineAvg, koalaAvg);

const checkWinner = (dolphineAvg, koalaAvg) => {
    if (dolphineAvg > koalaAvg) {
        console.log(
            `Dolphines got ${dolphineAvg} scores than koalas ${koalaAvg}. Dolphines wins.!!!`,
        );
    } else if (koalaAvg > dolphineAvg) {
        console.log(
            `Koalas got higher score ${koalaAvg} than dolphines ${dolphineAvg}. Koalas Won!`,
        );
    }
};

checkWinner(dolphineAvg, koalaAvg);

console.log(
    "------------- Coding Challange #2: Tip calculator using array ----------",
);
const bills = [125, 555, 44, 97];
const tips = [];
const totals = [];

const calcTip = function (billValue) {
    let tip = 0;
    let total = 0;

    if (billValue > 300) {
        tip = billValue * 0.2;
        total = billValue + tip;
    } else if (billValue >= 50 && billValue <= 300) {
        tip = billValue * 0.15;
        total = billValue + tip;
    } else {
        tip = 0;
        total = billValue + tip;
    }
    tips.push(tip);
    totals.push(total);
};

calcTip(bills[0]);
calcTip(bills[1]);
calcTip(bills[2]);

console.log(tips, totals);

console.log(
    "---------- Coding Chllange #3: Calculate BMI with Object ---------",
);
const markObj = {
    name: "Mark",
    mass: 78, // kg
    height: 1.69, // meter
    calcBMI: function () {
        const BMI = this.mass / this.height ** 2;
        return BMI;
    },
};
const johnObj = {
    name: "John",
    mass: 92, // kg
    height: 1.95, // meter
    calcBMI: function () {
        const BMI = this.mass / this.height ** 2;
        return BMI;
    },
};
// Set BMI value on object via calling the calcBMI() method.
markObj["BMI"] = markObj.calcBMI();
johnObj["BMI"] = johnObj.calcBMI();

if (markObj.BMI > johnObj.BMI) {
    console.log(
        `Marks BMI ${markObj.BMI} is higher than Johns BMI ${johnObj.BMI}`,
    );
} else {
    console.log(
        `Johns BMI ${johnObj.BMI} is higher than Marks BMI ${markObj.BMI}`,
    );
}
