//1.)
function avg(num1, num2, num3){
    let i=3;
    let average = (num1+num2+num3)/i;
    return average;
}

console.log(avg(4,8,12));

//2.)
let testNum1 = 8;
let testNum2 = 10;
let testNum3 = 3;

let computedAverage = avg(testNum1,testNum2,testNum3);

console.log(computedAverage);

//3.)
function isEqual(string1,string2){
    if  (string1 == string2){
    return true;
}
    else {
        return false;
    }
}

//4.)
console.log(isEqual("Ibee", "Ibee"));
console.log(isEqual("Ibee", "Itee"));

let result = isEqual("Ibee", "Ibee");
console.log(result);

result = isEqual("Ibee", "Itee");
console.log(result);

//5.)
function output(parameter){
    console.log(parameter);
}