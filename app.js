var x = document.querySelectorAll("nav ul li");
for (var i = 0; i < x.length; i++) {
	x[i].addEventListener("click", function () {
		document.querySelector("#check").checked = false;
	})
}

const logo = document.querySelector('.logo');
logo.addEventListener('click', function () {
	window.scrollTo(0, 0);
})