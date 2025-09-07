const leapYears = function(year) {
    if (year % 4 === 0) {
        console.log("Divisible by 4")
        if (!(year % 100 === 0)) {
            return true
        } else {
            if (year % 400 === 0) {return true}
        }
    }
    return false
};

// Do not edit below this line
module.exports = leapYears;
