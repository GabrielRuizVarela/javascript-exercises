const fibonacci = function(index) {
    if (Number(index)<=0){return "OOPS";}
    let fibBefore = 0, fib = 1, aux;
    for(let i=1; i<Number(index); i++){
        aux = fib;
        fib += fibBefore;
        fibBefore= aux;
    }
    return fib;
};

// Do not edit below this line
module.exports = fibonacci;
