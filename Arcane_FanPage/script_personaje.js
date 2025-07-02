document.addEventListener("DOMContentLoaded", () => {
    const characterCards = document.querySelectorAll(".character-card");
    const main = document.querySelector("main");
    
    characterCards.forEach(card => {
        card.addEventListener("click", () => {
            // Ascunde toate cardurile
            characterCards.forEach(c => c.style.display = "none");
            characterCards.forEach(c => c.style.backgroundColor =  "#2F2F3F");
            const targetCard = event.currentTarget
            // Creează un container pentru cardul mărit
            const expandedCard = document.createElement("div");
            expandedCard.classList.add("expanded-card");

            // Copiază conținutul cardului selectat
            expandedCard.innerHTML = `
                <img src="${card.querySelector("img").src}" alt="${card.querySelector("h3").textContent}">
                <h3>${card.querySelector("h3").textContent}</h3>
                <p>${card.querySelector("p").textContent}</p>
                <button id="back-button">Înapoi</button>
            `;

            const changeColorInterval = setInterval(() => {
                        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, 
                                               ${Math.floor(Math.random() * 256)}, 
                                               ${Math.floor(Math.random() * 256)})`;
                        targetCard.style.backgroundColor = randomColor;
                    }, 1000);

            // Adaugă cardul mărit în pagină
            main.appendChild(expandedCard);

            // Adaugă funcționalitate butonului „Back”
            document.getElementById("back-button").addEventListener("click", () => {
                expandedCard.remove(); // Șterge cardul mărit
                characterCards.forEach(c => c.style.display = "block"); // Afișează toate cardurile
            });
        });
    });
});
