const personagemContainer = document.getElementById('personagemContainer');

function getPersonagem() {
    console.log();

    fetch("https://rickandmortyapi.com/api/character/?page=19")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            const arrayPersonagem = data.results;
            displayPersonagem(arrayPersonagem);
        })
        .catch((error) => {
            console.error();
        });
}

function displayPersonagem(personagens) {
    personagemContainer.innerHTML = '';

    personagens.forEach((personagem) => {
        const personagemCard = document.createElement('div');
        personagemCard.classList.add('personagem-card');

        personagemCard.innerHTML = `
            <img src="${personagem.image}" alt="${personagem.name}">
            <h2>${personagem.name}</h2>
            <p>Status: ${personagem.status}</p>
            <p>Espécie: ${personagem.species}${personagem.type ? ` - ${personagem.type}` : ''}</p>
            <p>Origem: ${personagem.origin.name}</p>
            <p>Localização atual: ${personagem.location.name}</p>
        `;

        personagemContainer.appendChild(personagemCard);
    });
}

getPersonagem();
