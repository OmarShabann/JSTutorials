let scroller = document.querySelector(".scroller"),
	pageHeigth =
		document.documentElement.scrollHeight -
		document.documentElement.clientHeight,
	pageWidth = document.body.offsetWidth;

window.addEventListener("scroll", () => {
	let currentScroll = document.documentElement.scrollTop;
	scroller.style.width = `${(currentScroll / pageHeigth) * 100}%`;
	// Another Way
	// scroller.style.width = `${(currentScroll / pageHeigth) * pageWidth}px`;
});
