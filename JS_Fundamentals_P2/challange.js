console.log("----------- Codin Challange #1: ES6 function checkWinner ---------------");
let dolphineScore1 = 44;
let dolphineScore2 = 23;
let dolphineScore3 = 71;

let koalaScore1 = 65;
let koalaScore2 = 54;
let koalaScore3 = 49;

// let dolphineScore1 = 85;
// let dolphineScore2 = 54;
// let dolphineScore3 = 41;
//
// let koalaScore1 = 23;
// let koalaScore2 = 34;
// let koalaScore3 = 27;

const calcAvg = (data1, data2, data3) => (data1 + data2 + data3) / 3;

const dolphineAvg = calcAvg(dolphineScore1, dolphineScore2, dolphineScore3);
const koalaAvg = calcAvg(koalaScore1, koalaScore2, koalaScore3);
const checkWinner = (dolphineAvg, koalaAvg) => {
    if (dolphineAvg * 2 > koalaAvg) {
        console.log(`Dolphines got twice as koalas. Dolphines wins.!!!`);
    } else if (koalaAvg * 2 > dolphineAvg) {
        console.log(`Koalas gogt twice score as dolphines. Koalas Won!`);
    }
};

checkWinner(dolphineAvg, koalaAvg);
