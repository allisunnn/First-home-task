const container = document.getElementById("countries");
const loadingText = document.getElementById("loading");

console.log("JS działa");

// pobieranie danych z zewnętrznego API
fetch("https://jsonplaceholder.typicode.com/users")
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

        data.forEach(user => {
            const card = document.createElement("div");
            card.className = "country-card";

            card.innerHTML = `
                <h2>${user.name}</h2>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Miasto:</strong> ${user.address.city}</p>
                <p><strong>Firma:</strong> ${user.company.name}</p>
            `;

            container.appendChild(card);
        });
    })
    .catch(error => {
        console.error("Błąd:", error);
        loadingText.textContent = "Błąd podczas pobierania danych.";
    });
