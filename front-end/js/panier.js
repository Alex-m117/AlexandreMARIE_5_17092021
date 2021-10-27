const addLocalStorage = JSON.parse(localStorage.getItem("products"));
 


	const templateElt = document.getElementById("temppanier");
	const cloneElt = document.importNode(templateElt.content, true);
	const panierElt = document.getElementById("panier__vide");

if (addLocalStorage === null) {
	const panierVide = '<div class="panier__vide"> Votre Panier semble vide... </div>';
	panier__vide.innerHTML = panierVide;
	console.log("je suis vide")
}

else {
	
	let productsPanier = []

	for(i =0; i < addLocalStorage.length; i++);
	console.log(addLocalStorage.length)

	cloneElt.querySelector(".panier__image").src = addLocalStorage.imageUrl;
	cloneElt.querySelector(".panier__lenses").textContent = addLocalStorage.choixLenses;
	cloneElt.querySelector(".panier__head1").textContent = addLocalStorage.name;
	cloneElt.querySelector(".panier__prix").textContent  = addLocalStorage.price;
	cloneElt.querySelector(".panier__quantite").textContent =  addLocalStorage.quantité;

	document.getElementById("panierforms").appendChild(cloneElt);

	
		


console.log("je suis plein")

}





