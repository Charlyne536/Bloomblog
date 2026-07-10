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

        alert("🎉 Publication prête !");
    });

}
