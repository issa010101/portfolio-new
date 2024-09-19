// Code JavaScript facultatif pour les interactions dynamiques
console.log('Script JavaScript chargé');
    // Affiche le bouton lorsqu'on défile de 20px vers le bas
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        const backToTopButton = document.getElementById("backToTop");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    }

    // Lorsque l'utilisateur clique sur le bouton, il remonte en haut de la page
    document.getElementById("backToTop").onclick = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
