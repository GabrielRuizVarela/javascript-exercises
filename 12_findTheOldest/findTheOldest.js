const findTheOldest = function(array) {
    let result = array.reduce((total, current)=>{
            if (!current.yearOfDeath){
                current.yearOfDeath = new Date().getFullYear();
            }
            if ((total.yearOfDeath - total.yearOfBirth)<(current.yearOfDeath - current.yearOfBirth)){
                return current;
            }
            return total;
        },{name: " ", yearOfBirth:0, yearOfDeath:0});
    return result;
};

// Do not edit below this line
module.exports = findTheOldest;
