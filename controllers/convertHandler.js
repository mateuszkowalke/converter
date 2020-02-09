/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    if (input.split("/").length > 2) return "invalid number";
    if (input.search(/\d/) < 0) return 1;
    return input.split("/").map(val => Number(val.match(/\d+\.?\d*/)[0])).reduce((prev, curr) => prev / curr);
  };
  
  this.getUnit = function(input) {
    const units = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
    input = input.match(/\D+/)[0];
    if (units.includes(input)) {
      return input;
    } else {
      return "invalid unit";
    }
  };
  
  this.getReturnUnit = function(initUnit) {
    if (initUnit === "gal" || initUnit === "GAL") {
      return "l";
    } else if (initUnit === "l" || initUnit === "L") {
      return "gal";
    } else if (initUnit === "mi" || initUnit === "MI") {
      return "km";
    } else if (initUnit === "km" || initUnit === "KM") {
      return "mi";
    } else if (initUnit === "lbs" || initUnit === "LBS") {
      return "kg";
    } else if (initUnit === "kg" || initUnit === "KG") {
      return "lbs";
    }
  };

  this.spellOutUnit = function(unit) {
    const sheet = {
      gal: "gallons",
      l: "liters",
      mi: "miles",
      km: "kilometers",
      lbs: "pounds",
      kg: "kilograms",
      GAL: "gallons",
      L: "liters",
      MI: "miles",
      KM: "kilometers",
      LBS: "pounds",
      KG: "kilograms"
    };
    return sheet[unit];
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    if (initUnit === "gal" || initUnit === "GAL") {
      return Number((initNum * galToL).toFixed(5));
    } else if (initUnit === "l" || initUnit === "L") {
      return Number((initNum / galToL).toFixed(5));
    } else if (initUnit === "mi" || initUnit === "MI") {
      return Number((initNum * miToKm).toFixed(5));
    } else if (initUnit === "km" || initUnit === "KM") {
      return Number((initNum / miToKm).toFixed(5));
    } else if (initUnit === "lbs" || initUnit === "LBS") {
      return Number((initNum * lbsToKg).toFixed(5));
    } else if (initUnit === "kg" || initUnit === "KG") {
      return Number((initNum / lbsToKg).toFixed(5));
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
