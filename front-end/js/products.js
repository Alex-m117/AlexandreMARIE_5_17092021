
const ProductID = window.location.search;
const urlParams = new URLSearchParams(ProductID);
const id = urlParams.get("id");
console.log(id)
const urlProducts = "http://localhost:3000/api/cameras/"+id;

(async function productsPic() {

	const item = await getProduct()
	displayProduct(item)
	addPanier(item)
})()


function getProduct(){
	return fetch (urlProducts)
		.then(function(response){
			return response.json()	
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
	document.querySelector(".products__image").alt = item.name;
	document.querySelector(".products__h1").textContent = item.name;
	document.querySelector(".products__desc").textContent = item.description;
	document.querySelector(".products__price").textContent = item.price/100+ '€';

	let lenseOption = "";
		for (let i = 0; i < item.lenses.length; i++) {
		lenseOption += "<option value='"+item.lenses[i]+"'>"+item.lenses[i]+"</option>";
		
	};
	
		document.querySelector("#choix_lenses").innerHTML=lenseOption;

};

function addPanier(item) {

	const btnPanier = document.querySelector(".products__panier");
	
	btnPanier.addEventListener("click", function(event) {
	event.preventDefault();
	
	const clickLenses = document.querySelector("#choix_lenses");
	const choixLenses = clickLenses.value;

	let camProduct = {

	nom: item.name,
	image: item.imageUrl,
	id: item._id,
	lentilles: choixLenses,
	prix: item.price / 100 + "€",
	quantité: 1,
}	
	console.log(camProduct)

	let addLocalStorage = JSON.parse(localStorage.getItem("products"));

	function addStorage () {
		addLocalStorage.push(camProduct);
		localStorage.setItem("products", JSON.stringify(addLocalStorage));
	};

	if(addLocalStorage) {
		addStorage();
	}

	else {
		addLocalStorage = [];
		addStorage();
		}
}
)};







