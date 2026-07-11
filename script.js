// 🌸 Sakuria
// Version Alpha 0.1

console.log("Bienvenue sur Sakuria 🌸");

// Les animations et les fonctionnalités
// seront ajoutées progressivement.

const publishButton = document.getElementById("publish");

if (publishButton) {

    publishButton.addEventListener("click", function () {

        const media = document.getElementById("media");
        const caption = document.getElementById("caption");

        const hasMedia = media.files.length > 0;
        const hasText = caption.value.trim() !== "";

        if (!hasMedia && !hasText) {
            alert("🌸 Ajoute une photo, une vidéo ou écris un texte avant de publier.");
            return;
        }

        const publication = {
    texte: caption.value,
    date: new Date().toLocaleString()
};

// On récupère les anciennes publications
let publications = JSON.parse(localStorage.getItem("publications")) || [];

// On ajoute la nouvelle au début
publications.unshift(publication);

// On enregistre la liste
localStorage.setItem("publications", JSON.stringify(publications));

// Retour à l'accueil
window.location.href = "index.html";

const zonePublications = document.getElementById("publications");

if (zonePublications) {

    const publication = JSON.parse(localStorage.getItem("dernierePublication"));

    if (publication) {

        zonePublications.innerHTML = `
            <section class="post">
                <h3>🌸 Toi</h3>
                <p>${publication.texte}</p>
                <small>${publication.date}</small>
            </section>
        `;

    }

}
