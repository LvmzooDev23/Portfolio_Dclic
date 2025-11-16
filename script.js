let btn = document.getElementById("btnTop");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

btn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

function calculer() {
    const P = parseFloat(document.getElementById("principal").value);
    const tauxAnnuel = parseFloat(document.getElementById("interet").value);
    const annees = parseInt(document.getElementById("annee").value);

    if (isNaN(P) || P <= 0) {
        alert("Veuillez entrer un montant de prêt valide et positif.");
        return;
    }
    if (isNaN(tauxAnnuel) || tauxAnnuel <= 0) {
        alert("Veuillez entrer un taux d'intérêt annuel valide et positif.");
        return;
    }
    if (isNaN(annees) || annees <= 0) {
        alert("Veuillez entrer une durée de prêt en années valide et positive.");
        return;
    }

    const r = (tauxAnnuel / 100) / 12;
    const n = annees * 12;
    const M = P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    document.getElementById("resultat").innerHTML =
        "Paiement mensuel : <strong>" + M.toFixed(2) + " FCFA</strong>";
}