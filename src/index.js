module.exports = function check(str, bracketsConfig) {
  function deleteBrackets() {
    for (let i = 0; i < bracketsConfig.length; i++) {
      let brackets = bracketsConfig[i][0] + bracketsConfig[i][1];
      while (str.indexOf(brackets) !== -1) {
        str = str.replace(brackets, "");
      }
    }
    return str;
  }

  for (let x = 0; x < 10; x++) {
    deleteBrackets();
  }

  if (str === "") {
    return true;
  } else {
    return false;
  }
};
