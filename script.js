// 🌸 Sakuria
// Version Alpha 0.2

console.log("Bienvenue sur Sakuria 🌸");

localStorage.clear();

function tempsEcoule(date) {

    const secondes = Math.floor((Date.now() - date) / 1000);

    if (secondes < 60) return "À l'instant";

    const minutes = Math.floor(secondes / 60);

    if (minutes < 60) return `Il y a ${minutes} min`;

    const heures = Math.floor(minutes / 60);

    if (heures < 24) return `Il y a ${heures} h`;

    const jours = Math.floor(heures / 24);

    if (jours === 1) return "Hier";

    return `Il y a ${jours} jours`;

}

// ==============================
// PUBLIER UNE PUBLICATION
// ==============================

const publishButton = document.getElementById("publish");

if (publishButton) {

    publishButton.addEventListener("click", function () {

        const media = document.getElementById("media");
        const caption = document.getElementById("caption");

        const hasMedia = media.files.length > 0;
        const hasText = caption.value.trim() !== "";

        // Empêche les publications vides
        if (!hasMedia && !hasText) {
            alert("🌸 Ajoute une photo, une vidéo ou écris un texte.");
            return;
        }

        const publication = {
            texte: caption.value,
            date: Date.now()
        };

        // On récupère les anciennes publications
        let publications = JSON.parse(localStorage.getItem("publications")) || [];

        // On ajoute la nouvelle au début
        publications.unshift(publication);

        // On enregistre
        localStorage.setItem("publications", JSON.stringify(publications));

        // Retour à l'accueil
        window.location.href = "index.html";

    });

}



// ==============================
// AFFICHER LES PUBLICATIONS
// ==============================

const zonePublications = document.getElementById("publications");

if (zonePublications) {

    const publications = JSON.parse(localStorage.getItem("publications")) || [];

    publications.forEach(function(publication) {

        zonePublications.innerHTML += `

        <section class="post">

            <div class="post-header">

                <div class="post-info">
                    <strong>Vous</strong>
                    <p>${tempsEcoule(publication.date)}</p>
                </div>

            </div>

            <div class="post-content">
                ${publication.texte}
            </div>

        </section>

        `;

    });

}
