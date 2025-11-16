function afficherHeure() {
    let maintenant = new Date();
    let heures = maintenant.getHours().toString().padStart(2, '0');
    let minutes = maintenant.getMinutes().toString().padStart(2, '0');
    let secondes = maintenant.getSeconds().toString().padStart(2, '0');
    let heureFormat = `${heures}:${minutes}:${secondes}`;

    document.getElementById("zoneHeure").value = heureFormat;
    setTimeout(afficherHeure, 1000);
}
afficherHeure();
