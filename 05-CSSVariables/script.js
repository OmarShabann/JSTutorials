let colorInput = document.querySelector("#base");
let spacingInput = document.querySelector("#spacing");
let blurInput = document.querySelector("#blur");
let root = document.querySelector(":root");

function handelUpdate() {
	root.style.setProperty("--base", colorInput.value);
	root.style.setProperty("--spacing", spacingInput.value + "px");
	root.style.setProperty("--blur", blurInput.value + "px");
}

document.onchange = handelUpdate;
document.onmousemove = handelUpdate;

/*
let inputs = document.querySelectorAll(".controls input");
let root = document.querySelector(":root");

function handelUpdate() {
	let suffix = this.dataset.sizing || "";
	root.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach((input) => input.addEventListener("mousemove", handelUpdate));
inputs.forEach((input) => input.addEventListener("change", handelUpdate));
*/
