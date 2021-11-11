// Récupération de l'orderId dans le localStorage puis l'afficher dans le DOM.
const order = JSON.parse(localStorage.getItem("order"));
const orderId = order.orderId;
document.getElementById("confirmation__commande").textContent = "Commande n°" + orderId; 

// Récupération du prix total de la commande puis l'afficher dans le DOM.
const total = JSON.parse(localStorage.getItem("total"));
document.getElementById("confirmation__prix").textContent = "Prix total de la commande : " + total + ",00 €"; 

// Clean du LocalStorage et du panier pour éviter toutes modifications ultérieures.
localStorage.clear();
articlesNum();

// Possibilité de récupérer l'orderId dans l'URL qui est une méthode alternative a la récupération des informations dans le local storage.
// Partie fetch dans panier.js:
//	.then(response => response.json())
//	.then(function (commande) { 
//	localStorage.setItem("order", commande);
//		window.location.href = ("confirmation.html?order="+ commande.orderId);
//	})

// Partie récupération de l'information de l'URL dans confirmation.js
// 	const orderID = window.location.search;
//	const urlParams = new URLSearchParams(orderID);
//	const order = urlParams.get("order");
//	console.log(order)