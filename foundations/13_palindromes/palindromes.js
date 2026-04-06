const palindromes = function (word) {
    let cleaned = word.toLowerCase().replace(/[^a-z0-9]/g, '');

    let reversed = cleaned.split('').reverse().join('');

    return cleaned === reversed;
};


palindromes('A car, a man, a maraca.');

// Do not edit below this line
module.exports = palindromes;
