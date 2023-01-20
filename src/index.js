module.exports = function check(str, bracketsConfig) {
  // let arr = [];
  // for (let item of bracketsConfig) {
  //   let brackets = item[0] + item[1];
  //   let bracketsIndex = str.indexOf(brackets);
  //   while (bracketsIndex !== -1) {
  //     arr = str.split("");
  //     //console.log(arr);
  //     //console.log(arr.splice(bracketsIndex, 2));
  //     //console.log(arr);
  //     str = arr.join("");
  //     //console.log(str);
  //     bracketsIndex = str.indexOf(brackets);
  //     //console.log(bracketsIndex);
  //   }
  //   if (bracketsIndex === -1) {
  //     return false;
  //   }
  // }

  //console.log(bracketsConfig.length)

  //let newStr = str;

  function deleteBrackets() {
    for (let i = 0; i < bracketsConfig.length; i++) {
      //console.log(bracketsConfig.length , i);

      let brackets = bracketsConfig[i][0] + bracketsConfig[i][1];
      //console.log(brackets + " brackets");

      while (str.indexOf(brackets) !== -1) {
        str = str.replace(brackets, "");
        //console.log(str);
        //continue;
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
