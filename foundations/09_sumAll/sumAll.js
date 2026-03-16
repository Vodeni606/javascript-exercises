const sumAll = function(a,b) {

    numbers = [];

    for(let i = a; i<=b;i++){
        numbers.push(i)
    }
    return numbers.reduce(function(accumulator, current) {
        return accumulator + current;
});

};

// Do not edit below this line
module.exports = sumAll;
