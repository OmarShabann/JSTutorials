// vars
let menu = document.querySelector(".menu"),
	ul = document.getElementById("elements"),
	close = document.querySelector(".close"),
	span = document.querySelector(".year"),
	links = document.querySelectorAll(".open"),
	imgs = document.querySelectorAll(".boxes-container .box img");

// close the popup header
menu.addEventListener("click", () => {
	ul.style.display = "flex";
	ul.style.flexDirection = "column";
	ul.style.position = "absolute";
	ul.style.top = "0";
	ul.style.left = "0";
	ul.style.width = "100%";
	ul.style.backgroundColor = "#333";
	close.style.display = "block";
	close.style.color = "white";
	close.style.fontSize = "30px";
});
close.addEventListener("click", () => {
	ul.style.display = "none";
	close.style.display = "none";
});

// Updating the year of the copyrigth
let newDate = new Date();

span.innerHTML = newDate.getFullYear();

// making the images blur on hovering the link
for (let i = 0; i < links.length; i++) {
	links[i].addEventListener("mouseover", () => {
		imgs[i].style.filter = "blur(2px)";
	});
}

for (let i = 0; i < links.length; i++) {
	links[i].addEventListener("mouseout", () => {
		imgs[i].style.filter = "none";
	});
}

for (let i = 0; i < imgs.length; i++) {
	imgs[i].addEventListener("mouseover", () => {
		imgs[i].style.filter = "blur(2px)";
	});
}

for (let i = 0; i < imgs.length; i++) {
	imgs[i].addEventListener("mouseout", () => {
		imgs[i].style.filter = "none";
	});
}
