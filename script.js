const buttons = document.querySelectorAll(".buttons");
// const paragraph = document.querySelectorAll("p");
// console.log(buttons,p);

// setiap button di klik
buttons.forEach((button) => {
	button.addEventListener("click", () => {
		// toggle class active
		button.classList.toggle("active");
		// cari saudara dari elemen button
		let p = button.nextElementSibling;
		// toggle class active
		p.classList.toggle("active");
	});
});
