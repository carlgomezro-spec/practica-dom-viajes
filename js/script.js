const viajes = [
  {
    title: "Marbella",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut fermentum justo. Duis euismod massa non augue euismod ultricies. Sed lobortis dignissim lorem, pharetra",
    url_img: "./assets/banner/2.jpg"
  },
  {
    title: "Barcelona",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut fermentum justo. Duis euismod massa non augue euismod ultricies. Sed lobortis dignissim lorem, pharetra",
    url_img: "./assets/banner/3.jpg"
  },
  {
    title: "Ibiza",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut fermentum justo. Duis euismod massa non augue euismod ultricies. Sed lobortis dignissim lorem, pharetra",
    url_img: "./assets/banner/4.jpg"
  }
];

const result = document.getElementById("viajes-container")

for (let viaje of viajes) {
result.innerHTML += `
  <article class="card">
  <img src=${viaje.url_img} alt=${viaje.url_img}/>
  <h2>${viaje.title}</h2>
  <p>${viaje.description}</p>
  </article>
  `}

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

const container = document.getElementById('destinos-container');

const select = document.createElement('select');

  cities.forEach(city => {
  const option = document.createElement('option');
  option.value = city;
  option.textContent = city;
  select.appendChild(option);
});

container.appendChild(select);
