const reverseString = function(str) {
    // const splitStr = str.split("");
    // let reverse="";
    // for (let i = splitStr.length - 1; i>=0; i--){
    //     reverse+= splitStr[i];
    // }
    // return reverse;
    const splitStr = str.split("");
    let reversed = splitStr.reverse();
    return reversed.reduce((a,b) => a+b,"");
};

// Do not edit below this line
module.exports = reverseString;
