document.addEventListener("DOMContentLoaded", () => {
const username = localStorage.getItem('username');

if (!username) {
    // Dacă nu este autentificat, redirecționează către pagina de login
    window.location.href = "motiv.html";
} else {
    // Afișează numele utilizatorului
    document.getElementById("username-display").textContent = username;
}

// Adaugă funcționalitatea de logout
document.getElementById("logout").addEventListener("click", function() {
    // Șterge informațiile de autentificare din localStorage
    localStorage.removeItem('username');
    // Redirecționează utilizatorul către pagina de login
    window.location.href = "motiv.html";
});


        const canvas = document.getElementById('ratingCanvas');
        const ctx = canvas.getContext('2d');

        const maxRating = 5; 
        const circleRadius = 15; 
        const spacing = 50; 
        const startX = 30;
        const centerY = canvas.height / 2; 

        let currentRating = 0; 

        function drawCircles(selectedRating) {
            ctx.clearRect(0, 0, canvas.width, canvas.height); 
            for (let i = 1; i <= maxRating; i++) {
                ctx.beginPath();
                const x = startX + (i - 1) * spacing; 
                ctx.arc(x, centerY, circleRadius, 0, Math.PI * 2);

                ctx.fillStyle = i <= selectedRating ? '#FFD700' : '#CCCCCC';
                ctx.fill();

                ctx.strokeStyle = '#000';
                ctx.stroke();
            }
        }

        canvas.addEventListener('click', (event) => {
            const rect = canvas.getBoundingClientRect();
            const mouseX = event.clientX - rect.left;

            // Determină cercul pe care s-a făcut clic
            for (let i = 1; i <= maxRating; i++) {
                const circleX = startX + (i - 1) * spacing;
                if (mouseX >= circleX - circleRadius && mouseX <= circleX + circleRadius) {
                    currentRating = i;
                    drawCircles(currentRating);
                    document.getElementById('ratingValue').textContent = `Rating selectat: ${currentRating}`;
                    break;
                }
            }
        });

        // Desenează cercurile inițiale
        drawCircles(currentRating);
});
