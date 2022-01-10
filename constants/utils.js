
// Hijri year remainders for determining Kabisa years
export const KABISA_YEAR_REMAINDERS = [2, 5, 8, 10, 13, 16, 19, 21, 24, 27, 29];

// number of days in a Hijri year per month
export const DAYS_IN_YEAR = [30, 59, 89, 118, 148, 177, 207, 236, 266, 295, 325];

// number of days in 30-years per Hijri year
export const DAYS_IN_30_YEARS = [
    354, 708, 1063, 1417, 1771, 2126, 2480, 2834, 3189, 3543,
    3898, 4252, 4606, 4961, 5315, 5669, 6024, 6378, 6732, 7087,
    7441, 7796, 8150, 8504, 8859, 9213, 9567, 9922, 10276, 10631
];




export const MONTH_NAMES = {
    long: {
        en: [
            "Moharram al-Haraam",
            "Safar al-Muzaffar",
            "Rabi al-Awwal",
            "Rabi al-Aakhar",
            "Jumada al-Ula",
            "Jumada al-Ukhra",
            "Rajab al-Asab",
            "Shabaan al-Karim",
            "Ramadaan al-Moazzam",
            "Shawwal al-Mukarram",
            "Zilqadah al-Haraam",
            "Zilhaj al-Haraam"
        ]
    },
    short: {
        en: [
            "Moharram",
            "Safar",
            "Rabi I",
            "Rabi II",
            "Jumada I",
            "Jumada II",
            "Rajab",
            "Shabaan",
            "Ramadaan",
            "Shawwal",
            "Zilqadah",
            "Zilhaj"
        ]
    }
};

export const getMonthName = (month) => MONTH_NAMES.long.en[month];

// is the specified Hijri year a Kabisa year?
export const isKabisa = (year) => {
    for (var i in KABISA_YEAR_REMAINDERS) {
        if (year % 30 === KABISA_YEAR_REMAINDERS[i]) {
            return true;
        }
    }
    return false;
};

// return number of days in the specified Hijri year and month
export const daysInMonth = (year, month) => (month === 11 && isKabisa(year) || month % 2 === 0) ? 30 : 29;

