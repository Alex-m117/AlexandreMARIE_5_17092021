// Déclaration de l'URL qui génére l'appel à l'API.
const url = "http://localhost:3000/api/cameras";

// Fonction "main" asynchrone qui gére les différentes fonctions de la page Index.
(async function arrPic() {
	const camera = await getItems()

	for (items of camera) {
		displayItems(items); 	
	}	
	articlesNum();	
})();

// Fonction fetch qui gérent l'appel de l'API pour l'affichage des articles si la promesse est résolue.
function getItems(){
	return fetch (url)
	.then(function(response){
		return response.json()
	})
	.then(function(camera){
		return camera
	})
	.catch(function(err){
		alert (err)
	})
};

// Fonction d'affichage des informations dans le DOM des articles suite à "fetch" et envoi sous forme de lien les paramètres de l'id dans l'URL.
function displayItems(items){
	const templateElt = document.getElementById("tempindex");
	const cloneElt = document.importNode(templateElt.content, true);

	cloneElt.querySelector(".cameras__lien").href = "./front-end/pages/products.html?id="+items._id;
	cloneElt.querySelector(".cameras__image").src = items.imageUrl;
	cloneElt.querySelector(".h3").textContent = items.name;
	cloneElt.querySelector(".price").textContent = items.price/100+ ',00 €';

	document.getElementById("picforms").appendChild(cloneElt);
};