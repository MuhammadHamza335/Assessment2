//  Question: Write a function that determines if a given string has all unique characters.

// My code:
function CheckDuplicates(str) {
  let strArray = str.split("");
  let arr = [];
  for (let i = 0; i < strArray.length; i++) {
    if (arr.includes(strArray[i])) {
      return false;
    } else {
      arr.push(strArray[i]);
    }
  }
  return true;
}
