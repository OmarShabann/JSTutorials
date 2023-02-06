let menu = document.querySelector(".menu"),
	ul = document.getElementById("elements"),
	close = document.querySelector(".close"),
	span = document.querySelector(".year");

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

let newDate = new Date();

span.innerHTML = newDate.getFullYear();
