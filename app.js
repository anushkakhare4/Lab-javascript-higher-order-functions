//  Function #1: Array Slice

function slice() {
    var modifiedFood = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
    console.log(modifiedFood.slice(1, 4));
}
console.log(modifiedFood);

//Output: slice()
//  (3) ["burger", "fingerChips", "donuts"]
//----------------------------------------------------------------------------------

//   Function #2: Array Splice

function splice() {
    var modifiedFood = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
    modifiedFood.splice(2, 0, 'noodles', 'icecream');
    // inserts at index 1
    console.log(modifiedFood);
}
console.log(modifiedFood);

//Output: splice()
// (7) ["pizza", "burger", "noodles", "icecream", "fingerChips", "donuts", "springRoll"]

//----------------------------------------------------------------------------------------

//  Function #3: Filter

function isEven(numberArray) {
    const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
    let filtered = numberArray.filter(i => {
        if (i % 2 == 0)
            return i;
    });
    console.log(`Even number ${filtered}`);
}

isEven(numberArray);

//Output getEvenNumbers()
// 12
// 324
// 4
// 2
// 4234

//Function #3: Filterconst numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
function isEven(numberArr) {
    let evenNum = numberArr.filter(function (num) {
        return num % 2 == 0;
    });
    return evenNum;
}
console.log("Even Number is=> " + isEven(numberArray));
//3.1 Prime Number
myArray = [12, 324, 213, 4, 2, 3, 45, 4232];

function prime(arr) {
    return "The prime numbers are: " + arr.filter((number) => {

        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
        }
        return true;
    });
}

var myArray1 = [2, 3];
// Function #4: Reject
function nonPrime(arr) {

    return "The even numbers are: " + arr.filter((number) => {

        for (var i = 2; i <= myArray1.length; i++) {
            if (number % i === 0) true;
        }
        return false;
    });
}
console.log(prime(myArray));
console.log(nonPrime(myArray1));

//Function #5: Lambda
const array = [12, 324, 213, 4, 2, 3, 45, 4232];

function isEven(array) {
    return "the lamba function even numners are " + array.filter(num => num % 2 == 0);
}

console.log(isEven(array));

//Function #6: Map
const mapArray = [11, 34, 20, 5, 53, 16];
let modified = mapArray.map(function (items) {
    return items * items;
});
console.log(modified);


//Function #7: Reduce
let reduce = [2, 3, 5, 10];
let sum = 0;
let modified1 = mapArray.reduce(function (items) {
    sum = sum + items;
    return sum;
});
console.log("the sum agter applying reduce function " + modified1);
