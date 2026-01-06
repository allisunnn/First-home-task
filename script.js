const container = document.getElementById("countries");
const loadingText = document.getElementById("loading");

console.log("JS działa");

fetch("https://restcountries.com/v3.1/all?fields=name,capital,population,flags")
    .then(response => {
        console.log("Status HTTP:", response.status);

        if (!response.ok) {
            throw new Error("Błąd HTTP: " + response.status);
        }
        return response.json();
    })
    .then(data => {
        console.log("Dane:", data);

        loadingText.remove();

        data.slice(0, 12).forEach(country => {
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
