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
        console.log(`Dolphines got ${dolphineAvg} scores than koalas ${koalaAvg}. Dolphines wins.!!!`);
    } else if (koalaAvg > dolphineAvg) {
        console.log(`Koalas got higher score ${koalaAvg} than dolphines ${dolphineAvg}. Koalas Won!`);
    }
};

checkWinner(dolphineAvg, koalaAvg);


