let toUnit = document.getElementById('tounits');

let fromUnit = document.getElementById('fromunits');

function Convert() {
    let toSelected = toUnit.value;
    let fromSelected = fromUnit.value;

    let input = document.querySelector('.from input').value;
    let result = document.getElementById('result')

    if (toSelected == fromSelected) {
        alert("Cannot Convert Same Units");
    }

    else if (toSelected == "&degC" && fromSelected == "K") {
        result.innerText = (input - 273.15).toFixed(2) + "°C";
    }

    else if (toSelected == "K" && fromSelected == "&degC") {
        result.innerText = (input + 273.15).toFixed(2) + "K";
    }

    else if (toSelected == "&degC" && fromSelected == "&degF") {
        result.innerText = ((input - 32) * 5/9).toFixed(2) + "°C";
    }
    
    else if (toSelected == "&degF" && fromSelected == "&degC") {
        result.innerText = ((input * 9/5) + 32).toFixed(2) + "°C";
    }

    else if (toSelected == "K" && fromSelected == "&degF") {
        result.innerText = (input - 32) * 5/9 + 273.15 + "K";
    }

    else if (toSelected == "&degF" && fromSelected == "K") {
        result.innerText = (input - 273.15) * 9/5 + 32 + "°F";
    }
}

