const toggleMobileMenu = document.querySelector("#input-hamburger");

toggleMobileMenu.addEventListener("click", e => {
	if (e.target.checked) {
		document.body.classList.add("stop-scrolling");
	} else document.body.classList.remove("stop-scrolling");
});
