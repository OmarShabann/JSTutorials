let adviceNum = document.querySelector(".box h2 span");
let adviceBox = document.querySelector(".box q");
let dice = document.querySelector(".dice-container");

async function getData() {
	let myData = await fetch("https://api.adviceslip.com/advice");
	let finalAdvice = await myData.json();

	adviceNum.innerHTML = `${finalAdvice.slip.id}`;
	adviceBox.innerHTML = `${finalAdvice.slip.advice}`;
}

getData();

dice.addEventListener("click", getData);
