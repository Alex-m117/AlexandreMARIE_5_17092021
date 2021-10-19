const url = "http://localhost:3000/api/cameras";

(async function arrPic() {
	const camera = await getItems()

	for (items of camera) {
		displayItems(items) 
	}
})();

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

function displayItems(items){
	const templateElt = document.getElementById("tempindex");
	const cloneElt = document.importNode(templateElt.content, true);

	cloneElt.querySelector(".cameras__lien").href = "./front-end/pages/products.html?id="+items._id;
	cloneElt.querySelector(".cameras__image").src = items.imageUrl;
	cloneElt.querySelector(".h3").textContent = items.name;
	cloneElt.querySelector(".price").textContent = items.price/100+ '€';

	document.getElementById("picforms").appendChild(cloneElt);

};






