const urlProducts = "http://localhost:3000/api/cameras/${id}";
const ProductID = window.location.search;
console.log(ProductID)
const urlParams = new URLSearchParams(ProductID);
console.log(urlParams)
const id = urlParams.get("id");
console.log(id)

(async function productsPic() {

	const item = await getProduct()

})()


function getProduct(){
	return fetch (urlProducts)
		.then(function(response){
			return response.json()
		})
		.then(function(camID){
			return camID 
			console.log(camID)	
		})

		.catch(function(err){
			alert (err)
		})
};


function displayProduct(item){
	
	document.querySelector(".products__image").src = item.imageUrl;
	document.querySelector(".products__h1").textContent = item.name;
	document.querySelector(".products__price").textContent = item.price/100+ '€';
	document.querySelector(".choix").valueContent = item.value;
};


function addBasket(item) {

	let camProduct = {

	nom: item.name,
	id: item_id,
	lentilles: item.lenses,
	prix: item.price,
	quantité: 1,
};


	document.querySelector(".products__panier").addEventListener('click', function(ajout) {
			event.preventDefault()
});



let localAddProduct = JSON.parse(localStorage.getItem("item"));



};




















