// Récupération de l'orderId dans le localStorage puis l'afficher dans le DOM.
const order = JSON.parse(localStorage.getItem("order"));
const orderId = order.orderId;
document.getElementById("confirmation__commande").textContent = "Commande n°" + orderId; 

// Récupération du pric total de la commande puis l'afficher dans le DOM.
const total = JSON.parse(localStorage.getItem("total"));
document.getElementById("confirmation__prix").textContent = "Prix total de la commande : " + total + ",00 €"; 

// Clean du LocalStorage et du panier pour éviter toutes modifications ultérieures.
localStorage.clear();
articlesNum();