// Example format
// fetch('http://example.com/movies.json')
//   .then(response => response.json())
//   .then(data => console.log(data));.catch(er => console.log(er))

let button = document.querySelector("button");
button.addEventListener("click", getData);

function getData() {
	fetch("https://dog.ceo/api/breeds/image/random")
		.then(function (response) {
			return response.json();
		})
		.then(function (item) {
			let img = document.createElement("img");
			let ul = document.querySelector("#list");
			let li = document.createElement("li");
			
			img.src = item.message;

			li.append(img);
			ul.append(li);
		})
		.catch((err) => console.log(err));
}