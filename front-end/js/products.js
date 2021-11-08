// Déclarations des constantes "main" pour la récupération de l'id envoyer d'index dans l'URL.
const ProductID = window.location.search;
const urlParams = new URLSearchParams(ProductID);
const id = urlParams.get("id");
const urlProducts = "http://localhost:3000/api/cameras/"+id;

// Fonction "main" asynchrone qui gére les différentes fonctions de la page Products.
(async function productsPic() {
	const item = await getProduct();
	displayProduct(item);
	addPanier(item);
	articlesNum();
})();

// Récupération des éléments du produit choisi (controlé par sont id) via fetch pour la récupération des informations de ce produit.
function getProduct(){
	return fetch (urlProducts)
	.then(function(response){
		return response.json()	
	})
	.then(function(camID){
		return camID 
	})

	.catch(function(err){
		alert (err)
	})
};

// Fonction d'affichage du produit & des options/quantités désirées dans le DOM.
function displayProduct(item){
	
	document.querySelector(".products__image").src = item.imageUrl;
	document.querySelector(".products__image").alt = item.name;
	document.querySelector(".products__title").textContent = item.name;
	document.querySelector(".products__desc").textContent = item.description;
	document.querySelector(".products__price").textContent = item.price/100+ ',00 €';

	let lenseOption = "";

	for (let i = 0; i < item.lenses.length; i++) {
		lenseOption += "<option value='"+item.lenses[i]+"'>"+item.lenses[i]+"</option>";
		
	};
	
	document.querySelector("#choix__lenses").innerHTML=lenseOption;

	let quantiteOption = `
	<option value="1">1</option>
	<option value="2">2</option>
	<option value="3">3</option>
	<option value="4">4</option>
	<option value="5">5</option>
	`;

	document.querySelector("#choix__num").innerHTML=quantiteOption;
};
// Fonction des données à contôler/ajouter au panier via l'écoute du bouton "ajouter au panier".
function addPanier(item){

	const btnPanier = document.querySelector(".products__panier");
	
	btnPanier.addEventListener("click", function(event) {
		event.preventDefault();

		const clickLenses = document.querySelector("#choix__lenses");
		const choixLenses = clickLenses.value;
		const clickQuantite = document.querySelector("#choix__num");
		const choixQuantite = clickQuantite.value;

		let camProduct = {

			nom: item.name,
			image: item.imageUrl,
			id: item._id,
			lentilles: choixLenses,
			quantité: choixQuantite,
			prix: (item.price/100 * choixQuantite),
		};
 		
 		// Définition de addLocalStorage = à la clé "products" qui sera utilisée au sein du panier.
		let addLocalStorage = JSON.parse(localStorage.getItem("products"));

		// Fonction de "push" et de contrôle des doublons ID et des lentilles choisies pour avoir plusieurs choix avec le même produit au sein du panier.
		function addStorage () {
			addLocalStorage = addLocalStorage.filter(product => ((product.id !== camProduct.id) || ((product.id == camProduct.id) && (product.lentilles !== camProduct.lentilles))));
			addLocalStorage.push(camProduct);
			localStorage.setItem("products", JSON.stringify(addLocalStorage));
		};

		if (addLocalStorage) {
			addStorage();
		}
		// Injection des données sous forme de tableau "products" dans le localStorage.
		else {
			addLocalStorage = [];
			addStorage();
		};

		// Pop-up après "ajout au panier" à double choix pour l'utilisateur (OK => panier // Annuler => Accueil).
		if (confirm("Votre produit a bien été ajouté au panier, aller directement au panier ?")) {
			window.location.href = "./panier.html"
		}

		else {
			window.location.href = "../../index.html"
		};
	}	
)};