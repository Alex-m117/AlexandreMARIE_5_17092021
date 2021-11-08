// Fonction de génération du nombre de quantités/articles ajouter dans le panier en temps réel.
function articlesNum() {

	let productCart = JSON.parse(localStorage.getItem("products"));

	if ( productCart == null || productCart.length == 0 ) {
		document.getElementById("panier__num").textContent = "0"
	}

	else {
		let quantiteTotal = 0;
		for (i = 0; i < productCart.length; i++) {
			quantiteTotal += parseInt(productCart[i].quantité);
		}
		document.getElementById("panier__num").textContent = quantiteTotal;
	}

};
// Appel de la fonction.
articlesNum();