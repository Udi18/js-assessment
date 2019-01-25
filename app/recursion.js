recursionAnswers = {
  /**
   * List the files in a given directory, of a filesystem described by obj.
   * Data is an object that looks like this:
   * {
      dirName: 'app',
      files: ['index.html', 'page.html'],
      subDirs: [{...}]
      }
   *
   * Where ... is the same type of object
   * 
   * @param {fileSystemObject} data - a file system object as described above
   * @param {String} dirName - a directory name the files are desired to be listed from.
   * Note: This parameter is optional. If it is not provided, list ALL files.
   * 
   * @returns {Number[]} The files under the directory dirName, including subdiretories.
   */
  listFiles: function listFiles(data, dirName) {
    let answer = [];
    const findFiles = (obj) => {
      if (obj.files) answer = answer.concat(obj.files);
      if (obj.subDirs.length > 0) {
        obj.subDirs.forEach(obj2 => findFiles(obj2));
      }
    };
    const findDir = (obj, dirNameStr) => {
      let dirObj = {};
      for (let obj2 of obj.subDirs) {
        if (obj2.dirName) {
          if (obj2.dirName === dirNameStr) {
            dirObj = obj2;
            break;
          }
        }
      }
      return dirObj;
    };
    if (dirName) {
      findFiles(findDir(data, dirName));
    } else findFiles(data);
    return answer;
  },

  /**
   * Determines the fibonacci number at position n.
   * https://en.wikipedia.org/wiki/Fibonacci_number
   * 
   * The first few fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
   * 
   * @param {Number} n - the index of the fibonacci number desired
   * @returns {Number} The nth fibonacci number
   */
  fibonacci: function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  },
};
