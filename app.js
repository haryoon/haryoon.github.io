const nav = document.querySelector(".nav");

window.onscroll = function(){
	var top = window.scrollY;
	if (top >= 25){
		nav.classList.add("active")
	}else{
		nav.classList.remove("active");
	}
}


// Closing the Navbar when selecting a section
var x = document.querySelectorAll("nav ul li");

for(var i = 0; i < x.length; i++){
	x[i].addEventListener("click", function(){
		document.getElementById("check").checked = false;
	});
}

var z = document.querySelector("i");

z.addEventListener("click",function(){
	nav.classList.toggle("active")
});