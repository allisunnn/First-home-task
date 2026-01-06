const container = document.getElementById("countries");
const loadingText = document.getElementById("loading");

console.log("JS działa");

fetch("https://restcountries.com/v3.1/all")
    .then(response => {
        if (!response.ok) {
            throw new Error("Błąd HTTP: " + response.status);
        }
        return response.json();
    })
    .then(data => {
        console.log("Odebrane dane:", data);

        if (!Array.isArray(data)) {
            throw new Error("Dane nie są tablicą");
        }

        loadingText.remove();

        const selectedCountries = data.slice(0, 12);

        selectedCountries.forEach(country => {
            const name = country.name.common;
            const capital = country.capital ? country.capital[0] : "brak danych";
            const population = country.population.toLocaleString();
            const flag = country.flags.png;

            const card = document.createElement("div");
            card.className = "country-card";

            card.innerHTML = `
                <img src="${flag}" alt="Flaga ${name}">
                <h2>${name}</h2>
                <p><strong>Stolica:</strong> ${capital}</p>
                <p><strong>Populacja:</strong> ${population}</p>
            `;

            container.appendChild(card);
        });
    })
    .catch(error => {
        console.error(error);
        loadingText.textContent = "Błąd podczas pobierania danych.";
    });
