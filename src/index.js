module.exports = function check(str, bracketsConfig) {
  //console.log(str + ' str');
  //console.log(bracketsConfig[0][0] + ' bracketsConfig');
  //console.log(`${brackets.length} is length`);
  //let result = '';
  // for (let i = 0; i < bracketsConfig.lenght; i++) {
  //   console.log(bracketsConfig[i][0]);
  // }

  for (const item of bracketsConfig) {
    //console.log(item);
    //console.log(item[0] + item[1]);
    let brackets = str.indexOf(item[0] + item[1]);
    //console.log(brackets);
    return brackets === -1 ? false : true;
  }
  //console.log(result + ' result');
};
