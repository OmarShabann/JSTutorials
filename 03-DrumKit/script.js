// Playing the event with the keyboard
window.addEventListener("keydown", (e) => {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

	if (!audio) return;
	audio.currentTime = 0;
	audio.play();

	// Adding the class of the transition
	key.classList.add("playing");
});

// Playing the event by pressing the button (for mobiles)
let keys = document.querySelectorAll(".key");

keys.forEach((key, i) =>
	key.addEventListener("click", (e) => {
		const button = document.querySelector(`.key:nth-child(${i + 1})`);
		const audio = document.querySelector(
			`audio[data-key="${button.getAttribute("data-key")}"]`
		);

		audio.currentTime = 0;
		audio.play();

		// Adding the class of the transition
		button.classList.add("playing");
	})
);

// Removing the class of the transition

keys.forEach((key) =>
	key.addEventListener("transitionend", (e) => {
		if (e.propertyName !== "transform") return;
		key.classList.remove("playing");
	})
);
