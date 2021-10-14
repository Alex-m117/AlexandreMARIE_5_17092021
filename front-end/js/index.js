const url= "http://localhost:3000/api/cameras";

(async function arrPic() {
	const camera = await getItems()

	for (items of camera) {
		displayItems(items) 
	}
})()

function getItems(){
	return fetch ("url")
		.then(function(response){
			return response.json()
		})
		.then(function(camera){
			return camera
		})
		.catch(function(err){
			alert (err)
		})
}


function displayItems(items){
	const templateElt = document.getElementById("tempindex") 
	const cloneElt = document.importNode(template.content, true);

	clone.getElementById("cameras__image").src = items.imageUrl
	clone.getElementById("h3").textContent = items.name
	clone.getElementById("price").textContent = items.price + '€'

	document.getElementById("picrow").appendChild(cloneElt)

}






