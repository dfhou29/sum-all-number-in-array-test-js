function sumItems(array) {
  let sum = 0;
  for (const item of array) {
    if (Array.isArray(item)) {
      sum+= sumItems((item));
    } else {
      sum += item;
    }
  }
  return sum;
  // Sum all the numbers in the array
}

module.exports = sumItems;