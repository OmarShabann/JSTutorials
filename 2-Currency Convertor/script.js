// vars
let selector = document.getElementById("currencies"),
	input = document.getElementById("number"),
	result = document.getElementById("result"),
	selector2 = document.getElementById("currencies2");

// API Request
fetch(
	"https://api.currencyfreaks.com/latest?apikey=ef9fefafccc64ea7956c9681b4a7b5ce"
)
	.then((result) => {
		let data = result.json();
		return data;
	})
	.then((currency) => {
		let keysArr = Object.keys(currency.rates),
			valuesArr = Object.values(currency.rates);

		for (let i = 0; i < keysArr.length; i++) {
			let option = document.createElement("option");
			let option2 = document.createElement("option");

			option.setAttribute("value", `${valuesArr[i]}`);
			option2.setAttribute("value", `${valuesArr[i]}`);
			// Adding Defult currencies
			if (i === 147) {
				option2.setAttribute("selected", "selected");
			}
			if (i === 422) {
				option.setAttribute("selected", "selected");
			}
			option.innerText = `${keysArr[i]}`;
			option2.innerText = `${keysArr[i]}`;
			selector.appendChild(option);
			selector2.appendChild(option2);
		}
	});

// Result
input.addEventListener("input", () => {
	result.value = `${
		Math.round((selector2.value / selector.value) * input.value * 100) / 100
	}`;
});

selector.addEventListener("change", () => {
	result.value = `${
		Math.round((selector2.value / selector.value) * input.value * 100) / 100
	}`;
});

// Prevent changing input results
result.addEventListener("keypress", (e) => e.preventDefault());
