

// name = 'Josh';
// var name;

// console.log(name);
// setName();


// function setName() {
//     var name = 'Ted';
//     console.log(name);
// }

// console.log(name);

// console.log('top');

// let avg = findAvg(2, 2);

// console.log('after avg is defined', avg);

// function findAvg(a, b) {
//     console.log('inside findAvg');
//     var answer = (a + b) / 2;
//     return answer;
// }

let fruits = ['apple','orange','banana','pineapple','watermellon'];
let leastFav = fruits[3];

function printFruits() {
    let favFruit = fruits[2];
    console.log(fruits[0]);

    function printFavFruit() {
        console.log(favFruit);
    }

    console.log(leastFav);

    printFavFruit();
}

printFruits();

sayHello();


function sayHello() {
    console.log("Hello");
}

let anAlert = function () {
    console.log("Alert!");
}

anAlert();
