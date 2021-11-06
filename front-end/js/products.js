const ProductID = window.location.search;
const urlParams = new URLSearchParams(ProductID);
const id = urlParams.get("id");
console.log(id)
const urlProducts = "http://localhost:3000/api/cameras/"+id;

(async function productsPic() {

	const item = await getProduct()
	displayProduct(item)
	addPanier(item)
	articlesNum();
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
	document.querySelector(".products__title").textContent = item.name;
	document.querySelector(".products__desc").textContent = item.description;
	document.querySelector(".products__price").textContent = item.price/100+ ',00 €';

	let lenseOption = "";
	for (let i = 0; i < item.lenses.length; i++) {
		lenseOption += "<option value='"+item.lenses[i]+"'>"+item.lenses[i]+"</option>";
		
	};
	
	document.querySelector("#choix__lenses").innerHTML=lenseOption;

	let quantiteOption = `
	<option value="1">1</option>
	<option value="2">2</option>
	<option value="3">3</option>
	<option value="4">4</option>
	<option value="5">5</option>
	`;

	document.querySelector("#choix__num").innerHTML=quantiteOption;
};

function addPanier(item) {

	const btnPanier = document.querySelector(".products__panier");
	
	btnPanier.addEventListener("click", function(event) {
		event.preventDefault();

		const clickLenses = document.querySelector("#choix__lenses");
		const choixLenses = clickLenses.value;
		const clickQuantite = document.querySelector("#choix__num");
		const choixQuantite = clickQuantite.value;

		let camProduct = {

			nom: item.name,
			image: item.imageUrl,
			id: item._id,
			lentilles: choixLenses,
			quantité: choixQuantite,
			prix: (item.price/100 * choixQuantite),
		};

		let addLocalStorage = JSON.parse(localStorage.getItem("products"));

		function addStorage () {
			addLocalStorage = addLocalStorage.filter(product => ((product.id !== camProduct.id) || ((product.id == camProduct.id) && (product.lentilles !== camProduct.lentilles))));
			addLocalStorage.push(camProduct);
			localStorage.setItem("products", JSON.stringify(addLocalStorage));
		};

		if(addLocalStorage) {
			addStorage();

		}

		else {

			addLocalStorage = [];
			addStorage();
		};

		if (confirm("Votre produit a bien été ajouté au panier, aller directement au panier ?")) {
			window.location.href = "./panier.html"
		}

		else {
			window.location.href = "../../index.html"
		};
	}	
)};