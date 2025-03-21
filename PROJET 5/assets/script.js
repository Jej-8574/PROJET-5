const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let arrowRight = document.querySelector('#arrow_right')
console.log(arrowRight)

let arrowLeft = document.querySelector('#arrow_left')
console.log(arrowLeft)

let currentIndex = 0

let images = document.querySelector('.banner-img');
console.log(images);


const dots = document.querySelector(".dots")

var dotlist = []

for (var i = 0; i < slides.length; i++){
	var newdot = document.createElement ("div")
	newdot.classList.add("dot")
	if(i===0){
		newdot.classList.add("dot_selected")
	}
	dots.appendChild(newdot)
	dotlist.push(newdot)
}

function updateCarousel(currentIndex){
	console.log(images)
	console.log(images.src)
	images.src = "assets/images/slideshow/" + slides[currentIndex].image
	console.log(slides[currentIndex])
}	
updateCarousel(currentIndex)



arrowRight.addEventListener("click", () => {
	dotlist[currentIndex].classList.remove("dot_selected")
    console.log("➡️ Flèche droite cliquée !");
	if(currentIndex < slides.length -1){
		currentIndex++
	}
	else{
		currentIndex=0
	}
	console.log(currentIndex)
    updateCarousel(currentIndex);
	dotlist[currentIndex].classList.add("dot_selected")
});

arrowLeft.addEventListener("click", () => {
	dotlist[currentIndex].classList.remove("dot_selected")
    console.log("⬅️ Flèche gauche cliquée !");
	if(currentIndex > 0 ){
		currentIndex--
	}
	else{
		currentIndex= slides.length -1
	}
	console.log(currentIndex)
    updateCarousel(currentIndex);
	dotlist[currentIndex].classList.add("dot_selected")
});