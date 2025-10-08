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

const result = document.getElementById("viajes-container")

for (let viaje of viajes) {
result.innerHTML += `
  <li class="card">
  <img src=${viaje.url_img} alt=${viaje.url_img}/>
  <h2>${viaje.title}</h2>
  <p>${viaje.description}</p>
  </li>
  `}

result.style.fontSize = "10px"
result.style.display = "flex"
result.style.gap = "10px"
result.style.alignItems = "left"



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
select.style.width = '100%';
select.style.padding = '10px';
select.style.fontSize = '16px';
select.style.border = '1px solid #ccc';
select.style.borderRadius = '4px';
select.style.boxSizing = 'border-box';

  cities.forEach(city => {
  const option = document.createElement('option');
  option.value = city;
  option.textContent = city;
  select.appendChild(option);
});

container.appendChild(select);
