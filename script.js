const container = document.getElementById("countries");
const loadingText = document.getElementById("loading");

console.log("JS DZIAŁA");

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        console.log("HTTP status:", response.status);

        if (!response.ok) {
            throw new Error("Błąd HTTP: " + response.status);
        }

        return response.json();
    })
    .then(data => {
        console.log("Dane odebrane:", data);

        loadingText.remove();

        data.forEach(user => {
            const card = document.createElement("div");
            card.className = "country-card";

            card.innerHTML = `
                <h2>${use
