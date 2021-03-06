// Déclarations des constantes "main" & celles de gestion du template.
const addLocalStorage = JSON.parse(localStorage.getItem("products"));
const templateElt = document.getElementById("temppanier");
const panierElt = document.getElementById("panier__vide");

// Fonction "main" asynchrone pour la gestion et l'affichage des différentes fonctions du panier.
(async function arrPanier(){
	displayPanier();
	displayFormulaire();
	articlesNum();
})();

// Fonction d'affichage et de gestion du panier.
function displayPanier(){

	// Création des éléments du DOM à faire apparaitre/disparaitre en fonction du localStorage.
	let titrePanier = document.querySelector(".panier__h2");
	let tableauPanier = document.querySelector(".panier__recap");
	let cleanPanier = document.getElementById("button__deleleteall");
	let totalPanier = document.querySelector(".total__article");
	let formulairePanier = document.querySelector(".panier__row2");

	// si le LocalStorage est vide ou null il affiche un message d'avertissement et un retour à l'accueil, le DOM est effacé sur les déclarations précédentes.
	if (addLocalStorage === null || addLocalStorage.length == 0)  {
		document.getElementById("panier__num").textContent = "0"
		const panierVide = '<div class="panier__vide"> Oups... Votre panier est vide ! <a class="panier__retour" href="../../index.html"> Accueil </a> </div>';
		panier__vide.innerHTML = panierVide;
		titrePanier.style.display = "none";
		tableauPanier.style.display = "none";
		cleanPanier.style.display = "none";
		totalPanier.style.display = "none";
		formulairePanier.style.display = "none";
	}

	// Création des éléments du panier via template & gestion de l'affichage des produits du localStorage.
	else {
		
		let productsPanier = []

		for(let i =0; i < addLocalStorage.length; i++) {
			const cloneElt = document.importNode(templateElt.content, true);
			cloneElt.querySelector(".panier__img").src = addLocalStorage[i].image;
			cloneElt.querySelector(".panier__lenses").textContent = addLocalStorage[i].lentilles;
			cloneElt.querySelector(".panier__titre").textContent = addLocalStorage[i].nom;
			cloneElt.querySelector(".quantite").value = addLocalStorage[i].quantité;
			cloneElt.querySelector(".panier__prix").textContent = (addLocalStorage[i].prix * parseInt(addLocalStorage[i].quantité)) + ',00 €';

			document.getElementById("panier__body").appendChild(cloneElt);
			document.getElementById("panier__num").textContent = addLocalStorage.length;

			// Effacer un seul produit du panier.
			let btn_del = document.querySelectorAll(".button__del");
			btn_del[i].addEventListener('click', () => {
				addLocalStorage.splice(i,1);
				localStorage.clear();
				localStorage.setItem('products', JSON.stringify(addLocalStorage));
				let products = JSON.parse(localStorage.getItem("products"));

				if (products == null || products.length == 0) {
					localStorage.clear();	
				};	
				window.location.reload();
			}
			)};	

			// Vider entierement les produits du panier.
			document.getElementById("button__deleleteall").textContent = "Vider le panier";
			let btn_delall = document.getElementById("button__deleleteall");
			btn_delall.addEventListener('click', () => {
				localStorage.removeItem("products");
				location.reload();
			});
			
			// Calcul du prix total des articles
			let prixTotal = [];

			for(let j = 0; j < addLocalStorage.length; j++){
				let prixProductPanier = addLocalStorage[j].prix * parseInt(addLocalStorage[j].quantité);
				prixTotal.push(prixProductPanier);
			}

		//Mise en place de "reducer" (source MDN) pour l'addition des sommes du tableau prixTotal.
		const reducer = (accumulator, currentValue) => accumulator + currentValue;
		const price = prixTotal.reduce(reducer,0);
		document.querySelector("#total").textContent = price + ',00 €';
		localStorage.setItem("total", JSON.stringify(price));
	};

	// Gestion de la quantité des articles dans le panier et modification du prix total si modification de la quantité.
	let inputSelect = document.querySelectorAll(".quantite");

	for (let i = 0 ; i < inputSelect.length; i++) {
		inputSelect[i].addEventListener('change', function() {
			let newQuantity = inputSelect[i].value;

			if (newQuantity > 0 ){
				let product = JSON.parse(localStorage.getItem("products"))[i];
				addLocalStorage.splice(i,1);
				product.quantité = newQuantity;
				addLocalStorage.push(product);
				localStorage.setItem('products', JSON.stringify(addLocalStorage));
				window.location.reload();
			}
			else {
				alert("Attention, la quantité dois être supérieur à 0");
			}
		});
	};
};

// Fonction de gestion du formulaire.
function displayFormulaire(){

// Formulaire
let formulaire = document.querySelector(".formulaire");

// Création des fontions d'écoutes qui appèlent l'input pour les conditions regex.
formulaire.nom.addEventListener('change', function() {
	validNom(this);
});

formulaire.prenom.addEventListener('change', function() {
	validPrenom(this);
});

formulaire.mail.addEventListener('change', function() {
	validMail(this);
});

formulaire.adresse.addEventListener('change', function() {
	validAdresse(this);
});

formulaire.ville.addEventListener('change', function() {
	validVille(this);
});

// Contrôle Regex de l'input "Nom"
const validNom = function(inputNom) {
	const regexNomPrenom = new RegExp ("^[A-Za-z ]{1,30}$");

	// Récupération de la balise SMALL
	let small = inputNom.nextElementSibling;

	if (regexNomPrenom.test(inputNom.value)) {
		small.innerHTML = "Nom Valide";
		small.classList.remove("text-danger");
		small.classList.add("text-success");
		return true;
	}
	else {
		small.innerHTML = "Erreur de Saisie";
		small.classList.remove("text-success");
		small.classList.add("text-danger");
		return false;
	}
};

// Contrôle Regex de l'input "Prénom"
const validPrenom = function(inputPrenom) {
	const regexNomPrenom = new RegExp ("^[A-Za-z ]{1,30}$");

	// Récupération de la balise SMALL
	let small = inputPrenom.nextElementSibling;

	if (regexNomPrenom.test(inputPrenom.value)) {
		small.innerHTML = "Prénom Valide";
		small.classList.remove("text-danger");
		small.classList.add("text-success");
		return true;	
	}
	else {
		small.innerHTML = "Erreur de Saisie";
		small.classList.remove("text-success");
		small.classList.add("text-danger");
		return false;
	}
};

// Contrôle Regex de l'input "E-mail"
const validMail = function(inputMail) {
	const regexEmail = new RegExp ("^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([_\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$");

	// Récupération de la balise SMALL
	let small = inputMail.nextElementSibling;

	if (regexEmail.test(inputMail.value)) {
		small.innerHTML = "E-mail Valide";
		small.classList.remove("text-danger");
		small.classList.add("text-success");
		return true;
	}
	else {
		small.innerHTML = "Erreur de Saisie";
		small.classList.remove("text-success");
		small.classList.add("text-danger");
		return false;
	}
};

// Contrôle Regex de l'input "Prénom"
const validAdresse = function(inputAdresse) {
	const regexAdresse = new RegExp ("^[A-Za-z0-9, _-]{3,60}$");

	// Récupération de la balise SMALL
	let small = inputAdresse.nextElementSibling;

	if (regexAdresse.test(inputAdresse.value)) {
		small.innerHTML = "Adresse Valide";
		small.classList.remove("text-danger");
		small.classList.add("text-success");
		return true;	
	}
	else {
		small.innerHTML = "Erreur de Saisie";
		small.classList.remove("text-success");
		small.classList.add("text-danger");
		return false;
	}
};

// Contrôle Regex de l'input "Prénom"
const validVille = function(inputVille) {
	const regexVille = new RegExp ("^[A-Za-z- ]{1,30}$");

	// Récupération de la balise SMALL
	let small = inputVille.nextElementSibling;

	if (regexVille.test(inputVille.value)) {
		small.innerHTML = "Ville Valide";
		small.classList.remove("text-danger");
		small.classList.add("text-success");
		return true;	
	}
	else {
		small.innerHTML = "Erreur de Saisie";
		small.classList.remove("text-success");
		small.classList.add("text-danger");
		return false
	}
};

// Ecoute de l'envoi du formulaire 
document.getElementById("commander").addEventListener('click', function (e) {
	e.preventDefault();
	
	// Contrôle des informations saisies en globalité.
	if (validNom(formulaire.nom) 
		&& validPrenom(formulaire.prenom)
		&& validMail(formulaire.mail)
		&& validAdresse(formulaire.adresse) 
		&& validVille(formulaire.ville))
	{

		// Création fiche contact pour génération de la commande.
		let contact = {

			firstName: formulaire.nom.value,
			lastName: formulaire.prenom.value,
			address: formulaire.adresse.value,
			city: formulaire.ville.value,
			email: formulaire.mail.value,
		}

		//Récupération des ID produits pour les envoyer au back-end via la requête POST.
		let products = [];

		for(let k = 0; k < addLocalStorage.length; k++) {
			let idArticlePanier = addLocalStorage[k].id;
			products.push(idArticlePanier)
			console.log(idArticlePanier)
		};

		//fetch pour envoi des données au back-end et génération de la confirmation de commande.
		fetch ("http://localhost:3000/api/cameras/order",
		{
			method: "POST",
			headers: { 
				'Accept': 'application/json',
				'Content-Type': 'application/json' 
			},
			body: JSON.stringify({contact, products}),
		})
		.then(response => response.json())
		.then(response => { 
			let commande = JSON.stringify(response);
			localStorage.setItem("order", commande);
			window.location.href = "confirmation.html";
		})
		.catch(err => {
			alert('Envoi des données impossible, merci de vérifier vos informations.')
		})
	};
	// Soumission du formulaire au clic de l'événement.
	formulaire.click();
});
};