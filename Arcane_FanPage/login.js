document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const usernameRegex = /^[a-zA-Z0-9]+$/;  // Nume de utilizator valid: litere și cifre
    const passwordRegex = /^.{6,}$/;        // Parola trebuie să aibă minim 6 caractere

    if (!usernameRegex.test(username)) {
        document.getElementById("error-message").innerText = "Username invalid! (numai litere și cifre)";
        return;
    }

    if (!passwordRegex.test(password)) {
        document.getElementById("error-message").innerText = "Parola trebuie să aibă cel puțin 6 caractere!";
        return;
    }


    fetch('users.json')
        .then(response => response.json())  
        .then(users => {
            const user = users.find(u => u.username === username && u.password === password);

            if (user) {
                localStorage.setItem('username', user.username);
                // Redirecționăm utilizatorul către pagina protejată
                window.location.href = "recenzie.html";
            } else {
                // Login eșuat
                document.getElementById("error-message").innerText = "Username sau parola incorecte!";
            }
        })
        .catch(error => {
            console.error("Eroare la încărcarea datelor:", error);
            document.getElementById("error-message").innerText = "Eroare la procesarea cererii!";
        });
});
document.addEventListener("DOMContentLoaded", () => {
 function getFormattedDate() {
            const now = new Date();
            const day = now.getDate().toString().padStart(2, '0');
            const month = (now.getMonth() + 1).toString().padStart(2, '0');
            const year = now.getFullYear();
            return `${day}.${month}.${year}`;
        }

const formattedDate = getFormattedDate();
const dateInfoDiv = document.getElementById('dateInfo');
        dateInfoDiv.innerHTML = `<p>Data curentă: ${formattedDate}</p>`;
});