const urlProducts = "http://localhost:3000/api/cameras/${id}";
const ProductID = window.location.search;
const urlParams = new URLSearchParams(ProductID);
const id = urlParams.get("id");
console.log(id)

(async function productsPic() {

	const item = await getProduct()

})()


function getProduct(){
	return fetch (urlProducts)
		.then(function(response){
			return response.json()
			console.log(response)	
		})
		.then(function(camID){
			return camID 
		})

		.catch(function(err){
			alert (err)
		})
};


function displayProduct(item){
	
	document.querySelector(".products__image").src = item.imageUrl;
	document.querySelector(".products__h1").textContent = item.name;
	document.querySelector(".products__price").textContent = item.price/100+ '€';
	for (let i = 0; i < item.lenses.length; i++)
	document.querySelector(".choix").valueContent = item.value[i];
};

	const btnPanier = document.querySelector(".products__panier");
	btnPanier.addEventListener("click", function(ajout) {
	event.preventDefault()
});


function addBasket(item) {

	let camProduct = {

	nom: item.name,
	id: item_id,
	lentilles: item.value,
	prix: item.price / 100,
	quantité: 1,
};

let camProduct = JSON.parse(localStorage.getItem("item"));

};




















