function articlesNum() {

	let productCart = JSON.parse(localStorage.getItem("products"));

	if (productCart === null) {
		document.getElementById("panier__num").textContent = "0"
	}

	else {
		document.getElementById("panier__num").textContent = productCart.length;
	}

};
articlesNum();