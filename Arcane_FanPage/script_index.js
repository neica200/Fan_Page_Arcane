document.addEventListener("DOMContentLoaded", () => {
    const pozaIntro = document.getElementById("pozaintro");
    const main = document.querySelector("main");
    const imagini = new Array('imagini/intro2.jpeg','imagini/intro.avif');
    const myTimeout = setTimeout(stop, 5000);
    const buna =  document.getElementById("buna");
    let index = 0;
        pozaIntro.addEventListener("click", () => {
            index =(index + 1) % imagini.length

            event.target.src = imagini[index]
    });



function stop() {
 buna.style.animation = 'none';
};
});