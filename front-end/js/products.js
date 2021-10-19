const urlProducts = "http://localhost:3000/api/cameras/${id}";
const ProductID = new URL(location.href).searchParams.get('id');


(async function productsPic() {

	const item = await getProduct(ProductID);
	console.log(item)
})();


function getProduct(ProductID){
	return fetch (urlProducts)
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


function displayProduct(item){
	const templateElt = document.getElementById("tempproducts") 
	const cloneElt = document.importNode(templateElt.content, true);

	cloneElt.querySelector(".products__image").src = item.imageUrl;
	cloneElt.querySelector(".products__h1").textContent = item.name;
	cloneElt.querySelector(".products__price").textContent = item.price/100+ '€';
	cloneElt.querySelector(".choix").valueContent = item.value;

	document.querySelector("productsforms").appendChild(cloneElt)

};
























