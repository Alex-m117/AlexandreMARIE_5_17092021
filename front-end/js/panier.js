const addLocalStorage = JSON.parse(localStorage.getItem("products"));
const templateElt = document.getElementById("temppanier");
const panierElt = document.getElementById("panier__vide");

(async function arrPanier(){
	displayPanier()

})();

function displayPanier(){

	let titrePanier = document.querySelector(".panier__h2");
	let tableauPanier = document.querySelector(".panier__recap");
	let cleanPanier = document.getElementById("button__deleleteall");
	let totalPanier = document.querySelector(".total__article");
	let formulairePanier = document.querySelector(".panier__row2");

	if (addLocalStorage === null)  {
		document.getElementById("panier__num").textContent = "0"
		const panierVide = '<div class="panier__vide"> Oups... Votre panier est vide ! </div>';
		panier__vide.innerHTML = panierVide;
		titrePanier.style.display = "none";
		tableauPanier.style.display = "none";
		cleanPanier.style.display = "none";
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
			cloneElt.querySelector(".quantite").value = addLocalStorage[i].quantité;
			cloneElt.querySelector(".panier__prix").textContent = addLocalStorage[i].prix + ',00 €';

			document.getElementById("panier__body").appendChild(cloneElt);
			document.getElementById("panier__num").textContent = addLocalStorage.length;

			let btn_del = document.querySelectorAll(".button__del");
			btn_del[i].addEventListener('click', () => {
				addLocalStorage.splice(i,1);
				localStorage.clear();
				localStorage.setItem('products', JSON.stringify(addLocalStorage));	
				window.location.reload();
				if (products === 0) {
					localStorage.clear();	
				};	
			}
			)};	

			document.getElementById("button__deleleteall").textContent = "Vider le panier";
			let btn_delall = document.getElementById("button__deleleteall");
			btn_delall.addEventListener('click', () => {
				localStorage.removeItem("products");
				location.reload();
			});
			
			let prixTotal = [];

			for(let j = 0; j < addLocalStorage.length; j++){
				let prixProductPanier = addLocalStorage[j].prix;
				prixTotal.push(prixProductPanier);
			}
			//Mise en place de "reducer" (source MDN) pour l'addition des sommes du tableau prixTotal.
			const reducer = (accumulator, currentValue) => accumulator + currentValue;
			const price = prixTotal.reduce(reducer,0);
			document.querySelector("#total").textContent = price + ',00 €';
		};
	};			

// Formulaire --

// Ecoute de l'envoi du formulaire (conditions)

document.getElementById("commander").addEventListener('click',() => {
	// Mise en place Rejex via javascript avant création du tableau contact.
	let infoNom = document.getElementById("nom").value;
	let infoPrenom = document.getElementById("prenom").value;
	let infoMail = document.getElementById("mail").value;
	let infoAdresse = document.getElementById("adresse").value;
	let infoVille = document.getElementById("ville").value;
})
	const regexNomPrenom = new RegExp ("^[A-Za-z]{1,30}$");
	const regexEmail = new RegExp ("^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([_\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$");
	const regexAdresse = new RegExp ("^[A-Za-z0-9, _-]{3,60}$");
	const regexVille = new RegExp ("^[A-Za-z-]{1,30}$");

//if {


//}
	

// Création fiche contact.
// let contact = {
//	firstname: document.getElementById("nom").value,
//	lastname: document.getElementById("prenom").value,
//	email: document.getElementById("mail").value,
//	adress: document.getElementById("adresse").value,
//	city: document.getElementById("ville").value,
//};



