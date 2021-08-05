let heightInput = document.getElementById("height");
let weightInput = document.getElementById("weight");
let mainBtn = document.getElementById("mainBtn");
let resultPlace = document.getElementById("result");


function calculatBMI() {
    let result = (weightInput.value / Math.pow(heightInput.value, 2)) * 10000;
    if (result < 18.5) {
        resultPlace.classList.add("text-secondary");
        resultPlace.classList.remove("text-success");
        resultPlace.classList.remove("text-warning");
        resultPlace.classList.remove("text-danger");


    } else if (18.5 <= result && result <= 24.9) {
        resultPlace.classList.add("text-success");
        resultPlace.classList.remove("text-secondary");
        resultPlace.classList.remove("text-warning");
        resultPlace.classList.remove("text-danger");


    } else if (25 <= result && result <= 29.9) {
        resultPlace.classList.add("text-warning");
        resultPlace.classList.remove("text-success");
        resultPlace.classList.remove("text-secondary");
        resultPlace.classList.remove("text-danger");

    } else if (result >= 30) {
        resultPlace.classList.add("text-danger");
        resultPlace.classList.remove("text-success");
        resultPlace.classList.remove("text-warning");
        resultPlace.classList.remove("text-secondary");
    }

    if (!result || result < 0) {
        result = "Please enter valid positive numbers";
        resultPlace.classList.add("text-danger");
        resultPlace.classList.remove("text-success");
        resultPlace.classList.remove("text-warning");
        resultPlace.classList.remove("text-secondary");
    }
    resultPlace.innerHTML = result;

}

mainBtn.addEventListener("click", calculatBMI);