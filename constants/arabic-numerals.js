let arabicNumerals = {};

arabicNumerals.utf8Codes = ["\u0660", "\u0661", "\u0662", "\u0663", "\u0664",
  "\u0665", "\u0666", "\u0667", "\u0668", "\u0669"
],

  arabicNumerals.fromInteger = (x) => {
    let digits = Math.floor(x).toString().split("");
    return digits.map((digit) => parseInt(digit, 10)).map((digit) => arabicNumerals.utf8Codes[digit]).join("").toString();
  }


export default arabicNumerals;


