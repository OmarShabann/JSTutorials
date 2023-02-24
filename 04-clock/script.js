let secHand = document.querySelector(".second-hand");
let minHand = document.querySelector(".min-hand");
let hourHand = document.querySelector(".hour-hand");

function getDate() {
	// Get time
	let now = new Date();
	let second = now.getSeconds();
	let minute = now.getMinutes();
	let hour = now.getHours();

	// Rotate Hands
	secHand.style.transform = `rotate(${90 + (second / 60) * 360}deg)`;
	minHand.style.transform = `rotate(${
		90 + (second / 60) * 6 + (minute / 60) * 360
	}deg)`;
	hourHand.style.transform = `rotate(${
		90 + (minute / 60) * 30 + (hour / 12) * 360
	}deg`;

	/*
    Another way

	secHand.style.transform = `rotate(${90 + second * 6}deg)`;
	minHand.style.transform = `rotate(${90 + minute * 6}deg)`;
	hourHand.style.transform = `rotate(${90 + hour * 30}deg)`;

*/
}

setInterval(getDate, 1000);
