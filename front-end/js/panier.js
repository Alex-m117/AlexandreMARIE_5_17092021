const addLocalStorage = JSON.parse(localStorage.getItem("products"));
const templateElt = document.getElementById("temppanier");
const panierElt = document.getElementById("panier__vide");

(async function arrPanier(){
	displayPanier()

})();

function displayPanier(){

	let titrePanier = document.querySelector(".panier__h2");
	let tableauPanier = document.querySelector(".panier__recap");
	let totalPanier = document.querySelector(".total__article");
	let formulairePanier = document.querySelector(".panier__row2");

	if (addLocalStorage === null) {
		document.getElementById("panier__num").textContent = "0"
		const panierVide = '<div class="panier__vide"> Oups... Votre panier est vide ! </div>';
		panier__vide.innerHTML = panierVide;
		titrePanier.style.display = "none";
		tableauPanier.style.display = "none";
		totalPanier.style.display = "none";
		formulairePanier.style.display = "none";
	}

	else {

		let productsPanier = []

		for(let i =0; i < addLocalStorage.length; i++) {
			const cloneElt = document.importNode(templateElt.content, true);
			cloneElt.querySelector(".panier__img").src = addLocalStorage[i].image;
			cloneElt.querySelector(".panier__lenses").textContent = addLocalStorage[i].lentilles;
			cloneElt.querySelector(".panier__titre").textContent = addLocalStorage[i].nom;
			cloneElt.querySelector(".panier__prix").textContent  = addLocalStorage[i].prix;
			cloneElt.querySelector(".panier__quantite").textContent = addLocalStorage[i].quantité;

			document.getElementById("panier__body").appendChild(cloneElt);
			document.getElementById("panier__num").textContent = addLocalStorage.length;
		}
	}
};
