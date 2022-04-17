const removeFromArray = function(array, ...n) {
    let newArray = array;
    for(i=0; i<n.length;i++){
        newArray = newArray.filter(a => a!==n[i]);
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
