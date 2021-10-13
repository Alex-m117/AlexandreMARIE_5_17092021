const urlCameras = 'https://localhost:3000/api/cameras';

(async function arrPic() {
	const camera = await getItems()
console.log (camera)
	for (items of camera) {
		displayItems(items) 
	}
})()

function getItems(){
	return fetch ("urlCameras")
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
console.log(getItems)

function displayItems(items){
	const templateElt = document.getElementById("tempindex") 
	const cloneElt = document.importNode(template.content, true);

	clone.getElementById("cameras__image").src = items.imageUrl
	clone.getElementById("h3").textContent = items.name
	clone.getElementById("price").textContent = items.price + '€'

	document.getElementById("picrow").appendChild(cloneElt)

}

console.log(displayItems)



