// function MultiplyNumber(a,b){
//     return a * b
// }
// console.log(MultiplyNumber(5,4));
// console.log(MultiplyNumber(7,3));

// function calculationDiscaunt(a,b){
//      return a - (a * b / 100);
// }
// console.log("total price after discount: ",calculationDiscaunt(160000, 20));

// function SortArrey() {
//     let SortedArrey = numbers.sort((a, b)=> b - a)
//     return SortedArrey
// }

// let numbers = [4, 9, 2, 7, 5];

// console.log(SortArrey(numbers));


// let calculate;

// let operation = "+";

// if (operation === "+") {
//     calculate = function(a, b) {
//         return a + b;
//     };
// } else {
//     calculate = function(a, b) {
//         return a - b;
//     };
// }

// // console.log(calculate(10, 5));


// function calculateInsurance(basePrice, insuranceType) {
//     return insuranceType(basePrice);
// }

// function healthInsurance(price) {
//     return price + 30000;
// }

// function travelInsurance(price) {
//     return price + 10000;
// }

// console.log(calculateInsurance(50000, healthInsurance));
// //80000

// console.log(calculateInsurance(50000, travelInsurance));
// //60000


// let electricity = {
//     customer: "Raj",
//     usage: 200,
//     pricePerKwh: 150,

//     calculateBill: function() {
//         return this.usage * this.pricePerKwh;
//     },

//     showInfo: function() {
//         console.log("Customer: " + this.customer);
//         console.log("Usage: " + this.usage + " kWh");
//         console.log("Electricity bill: " + this.calculateBill() + " won");
//     }
// };

// electricity.showInfo();


function checkAge(age) {
    if (age > 18) {
        console.log("Adult");
    }
    else {
        console.log("Minor");
    }
}
checkAge(20)