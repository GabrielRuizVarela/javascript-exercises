const repeatString = function(str, number) {
    if (number < 0){
        return "ERROR";
    }
    else{
        let newStr = "";
            for(let i=0; i<number; i++){
                newStr+=str;
            }
            return newStr
        }
};

// Do not edit below this line
module.exports = repeatString;
