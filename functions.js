function getSum(num1, num2) {
    return num1 + num2;
}
// console.log(getSum(2, 3));
var mySum = function (num1, num2) {
    if (typeof num1 == "string") {
        num1 = parseInt(num1);
    }
    if (typeof num2 == "string") {
        num2 = parseInt(num1);
    }
    return num1 + num2;
};
// console.log(mySum('2', 3));
var getName = function (firstname, lastname) {
    // if(lastname == undefined) return firstname;
    return firstname + " " + lastname;
};
console.log(getName("John", "Doe"));
console.log(getName("John"));
