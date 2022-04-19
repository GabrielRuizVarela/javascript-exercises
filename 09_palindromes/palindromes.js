const palindromes = function (str) {
    str = str.split("")
            .filter(item => (item!=='.' && item!==',' && item!=='!' && item!==' '))
            .join("")
            .toLowerCase();
    let reversed = str.split("")
                    .reverse()
                    .join("");
    return (str===reversed ? true : false);
};

// Do not edit below this line
module.exports = palindromes;
