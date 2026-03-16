const reverseString = function(str) {

    let splitString = str.split('');
    splitString.reverse();
    return splitString.join('');
};

// Do not edit below this line
module.exports = reverseString;
