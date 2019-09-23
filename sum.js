const sum = function(num1, num2) {
    if (!num2) {
        num2 = 0;
    } 
    if (!num1) {
        num1 = 0;
    }
    return parseFloat(num1) + parseFloat(num2);
}

module.exports = sum;