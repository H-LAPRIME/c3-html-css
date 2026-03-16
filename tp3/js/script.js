document.addEventListener("DOMContentLoaded", function () {
    var liens = document.querySelectorAll("nav a");
    var pageCourante = window.location.pathname.split("/").pop();

    liens.forEach(function (lien) {
        var href = lien.getAttribute("href").split("/").pop();
        if (href === pageCourante) {
            lien.style.textDecoration = "underline";
            lien.style.color = "#66b3ff";
        }
    });

    var formulaire = document.querySelector("form");
    if (formulaire) {
        formulaire.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Votre message a bien été envoyé ! Nous vous répondrons sous 24h.");
        });
    }
});
