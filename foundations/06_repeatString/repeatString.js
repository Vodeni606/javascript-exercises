const repeatString = function(str,num) {

    let newstr = '';

    if (num < 0){
        return 'ERROR';
    }

    for( let i = 0; i < num; i++){

        newstr = str + newstr;
    }   
    return newstr;

};


// Do not edit below this line
module.exports = repeatString;
