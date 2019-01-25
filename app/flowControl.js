flowControlAnswers = {
  /**
   * Returns a string, that is either fizz, buzz, or fizzbuzz depending on a number num.
   * 
   * If the number is divisible by 3, the function should return 'fizz';
   * If the number is divisible by 5, the function should return 'buzz';
   * If the number is divisible by 3 and 5, the function should return 'fizzbuzz';
   * Otherwise the function should return the number.
   * If no number was provided or the value was not a number , return false.
   * 
   * @param {Number} num - A number used to determine the result
   * @returns {String} The string 'fizz', 'buzz', or 'fizzbuzz'
   */
  fizzBuzz: function fizzBuzz(num) {
    switch (true) {
      case (num % 3 === 0 && num % 5 === 0):
        return 'fizzbuzz';
      case (num % 3 === 0):
        return 'fizz';
      case (num % 5 === 0):
        return 'buzz';
      case (!isNaN(num)):
        return num;
      default:
        return false;
    }
  },
};
