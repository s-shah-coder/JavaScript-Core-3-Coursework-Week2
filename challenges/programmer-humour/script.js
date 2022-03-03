// Example format
// fetch('http://example.com/movies.json')
//   .then(response => response.json())
//   .then(data => console.log(data));.catch(er => console.log(er))

fetch("https://xkcd.now.sh/?comic=latest")
	.then(function (response) {
		return response.json();
	})
	.then(function (item) {
		console.log(item);
		let programmer= document.querySelector("#programmer");
		let img = document.createElement("img");

		img.src = item.img;

		programmer.append(img);
	})
	.catch((err) => console.log(err));