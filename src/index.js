module.exports = function check(str, bracketsConfig) {
  for (const item of bracketsConfig) {
    //console.log(item + ' item');
    let brackets = item[0] + item[1];
    //console.log(brackets)
    let bracketsIndex = str.indexOf(item[0] + item[1]);
    //console.log(bracketsIndex + ' brackets');
    let newStr;
    if (bracketsIndex === -1) {
      return false;
    } else if (bracketsIndex === 0 && str.length > 2) {
      newStr = str.slice(2, str.length);
      // console.log(newStr)
      if (newStr.length < 3 && newStr != brackets) {
        return false;
      }
    } else {
      return true;
    }
  }
};
