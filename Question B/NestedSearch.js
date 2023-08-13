// Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.

// my code
function FindNestedValue(object, SearchValue) {
  for (const key in object) {
    if (object[key] === SearchValue) {
      return true;
    } else if (object[key] !== null && typeof object[key] === "object") {
      if (FindNestedValue(object[key], SearchValue)) {
        return true;
      }
    }
  }
  return false;
}
