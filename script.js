async function searchMovie() {
    const movieTitle = document.getElementById('movieInput').value;
    
    const url = `https://www.omdbapi.com/?t=${movieTitle}&apikey=63c3756b`; 

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === "True") {
            const resultDiv = document.getElementById('result');
            resultDiv.style.display = 'block'; 
            
            resultDiv.innerHTML = `
                <img src="${data.Poster}" alt="Poster do Filme">
                <div class="info">
                    <h2>${data.Title}</h2>
                    <p class="rating">${data.imdbRating} Pontos de Relevância</p>
                    <p><strong>Ano:</strong> ${data.Year}</p>
                    <p><strong>Sinopse:</strong> ${data.Plot}</p>
                </div>
            `;
        } else {
            alert("Filme não encontrado na base de dados!");
        }
    } catch (error) {
        console.error("Erro na conexão:", error);
    }
}