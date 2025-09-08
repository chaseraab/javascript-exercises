function checkMantissa(flt) {
  let str = flt.toString()
  if (!(str.includes("."))) {
    return 0
  } else {
    return str.split(".")[1].length
  }
}
const convertToCelsius = function(temp) {
  let cels = (temp - 32) * (5/9)
  console.log("from CheckMantissa " + checkMantissa(cels))
    if (checkMantissa(cels) < 2) {
    return cels
  } else {
    return Number(cels.toFixed(1))
  }
};

const convertToFahrenheit = function(temp) {
  let fahre = (temp * (9/5) + 32)
  if (checkMantissa(fahre) < 2) {
    return fahre
  } else {
    return Number(fahre.toFixed(1))
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
