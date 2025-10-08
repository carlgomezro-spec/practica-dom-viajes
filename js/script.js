const viajes = [
  {
    title: "Viaje 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut fermentum justo. Duis euismod massa non augue euismod ultricies. Sed lobortis dignissim lorem, pharetra",
    url_img: "./assets/banner/2.jpg"
  },
  {
    title: "Viaje 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut fermentum justo. Duis euismod massa non augue euismod ultricies. Sed lobortis dignissim lorem, pharetra",
    url_img: "./assets/banner/3.jpg"
  },
  {
    title: "Viaje 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut fermentum justo. Duis euismod massa non augue euismod ultricies. Sed lobortis dignissim lorem, pharetra",
    url_img: "./assets/banner/4.jpg"
  }
];

const result = document.getElementById("result")

for (let viaje of viajes) {
result.innerHTML += `
  <img src=${viaje.url_img} alt=${viaje.url_img}/>
  <h2>${viaje.title}</h2>
  <p>${viaje.description}</p>
  `}

result.style.fontSize = "10px"



const cities = [
"Madrid",
"Barcelona",
"Valencia",
"Seville",
"Bilbao",
"Granada",
"Malaga",
"Palma de Mallorca",
"Alicante",
"Zaragoza"
];

