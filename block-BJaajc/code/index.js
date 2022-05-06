let fullName = function (firstName, lastName) {
  return firstName + `` + lastName;
};

let isPalindrome = function (word) {
  if (word.toString().split(``).reverse().join(``) === word.toString()) {
    return true;
  } else {
    return false;
  }
};

let getCircumfrence = function (radius) {
  return ` The circumfrence is ${2 * (22 / 7) * radius}`;
};

let getArea = function (radius) {
  return `The Area is ${(22 / 7) * radius * radius}`;
};

module.exports = { fullName, isPalindrome, getCircumfrence, getArea };
