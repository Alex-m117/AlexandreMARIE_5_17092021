const orderID = window.location.search;
const urlParams = new URLSearchParams(orderID);
const order = urlParams.get("order");
console.log(order)

document.getElementById("confirmation__commande").textContent = "Commande n°" + order; 

articlesNum();