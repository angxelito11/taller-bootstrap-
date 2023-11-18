
window.addEventListener('load', () => {
  const endpoint = 'https://rickandmortyapi.com/api/character/?page=1';
  fetch(endpoint)
    .then(response => response.json())
    .then(data => {
      const personajes = data.results.slice(0, 10);
      const container = document.getElementById('personajes-container');

      personajes.forEach(personaje => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
          <img src="${personaje.image}" class="card-img-top" alt="${personaje.name}">
          <div class="card-body">
            <h5 class="card-title">${personaje.name}</h5>
            <p class="card-text">Status: ${personaje.status}</p>
            <p class="card-text">Especie: ${personaje.species}</p>
          </div>
        `;

        container.appendChild(card);
      });
    })
    .catch(error => console.error('Error al obtener datos de la API:', error));
});

function buscarPersonajes() {
    const input = document.getElementById('buscar-input');
    const ids = input.value.split(',').map(id => id.trim());
  
    if (ids.length > 0) {

      const endpoint = `https://rickandmortyapi.com/api/character/${ids.join(',')}`;
      
      fetch(endpoint)
        .then(response => response.json())
        .then(personajes => {
          const container = document.getElementById('resultado-container');
          container.innerHTML = ''; 

          personajes.forEach(personaje => {

            const card = document.createElement('div');
            card.classList.add('card');

            card.innerHTML = `
              <img src="${personaje.image}" class="card-img-top" alt="${personaje.name}">
              <div class="card-body">
                <h5 class="card-title">${personaje.name}</h5>
                <p class="card-text">Status: ${personaje.status}</p>
                <p class="card-text">Especie: ${personaje.species}</p>
              </div>
            `;
  
            container.appendChild(card);
          });
        })
        .catch(error => {
          alert('Error al obtener datos de la API. Verifique los IDs ingresados.');
          console.error('Error al obtener datos de la API:', error);
        });
    } else {
      alert('Por favor, ingrese al menos un ID de personaje.');
    }
  }