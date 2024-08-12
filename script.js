const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");

const decimalToArabic = (number) => {
    let result = "";
    let n = number;
    const numeral = {
        "M": 1000,
        "CM": 900,
        "D": 500,
        "CD": 400,
        "C": 100,
        "XC": 90,
        "L": 50,
        "XL": 40,
        "X": 10,
        "IX": 9,
        "V": 5,
        "IV": 4,
        "I": 1
        };

    for (let num in numeral) {
        while(numeral[num] <= n) {
            result = result + num;
            n = n - numeral[num];
        }
     }
     return result;
};

const output = () => {
    if (input.value == "") {
        result.innerText = "Please enter a valid number";
    } else if (input.value <= 0) {
        result.innerText = "Please enter a number greater than or equal to 1";
    } else if (input.value > 3999) {
        result.innerText = "Please enter a number less than or equal to 3999";
    } else {
        let answer = decimalToArabic(input.value);
        result.innerText = answer;
    }

};

convertBtn.addEventListener("click",output);
