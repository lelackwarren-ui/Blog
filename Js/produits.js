const filterButtons =
    document.querySelectorAll(".filter-btn");

const productCards =
    document.querySelectorAll(".product-card");

const productCount =
    document.getElementById("productCount");


/* =========================
   FILTRAGE DES PRODUITS
========================= */

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        /* Retirer active de tous les boutons */

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        /* Ajouter active au bouton sélectionné */

        button.classList.add("active");

        const selectedCategory =
            button.dataset.category;

        let visibleProducts = 0;


        productCards.forEach(card => {

            const cardCategory =
                card.dataset.category;


            if (
                selectedCategory === "all" ||
                selectedCategory === cardCategory
            ) {

                card.style.display = "block";

                visibleProducts++;

                /* petite animation */

                card.style.opacity = "0";

                setTimeout(() => {

                    card.style.opacity = "1";

                }, 50);

            }

            else {

                card.style.display = "none";

            }

        });


        /* Mise à jour du compteur */

        productCount.textContent =
            visibleProducts +
            (
                visibleProducts > 1
                    ? " produits"
                    : " produit"
            );

    });

});


/* =========================
   RECHERCHE
========================= */

const searchBtn =
    document.getElementById("searchBtn");

const searchBox =
    document.getElementById("searchBox");

const searchInput =
    document.getElementById("searchInput");

const closeSearch =
    document.getElementById("closeSearch");


searchBtn.addEventListener("click", () => {

    searchBox.classList.toggle("show");

    if (searchBox.classList.contains("show")) {

        searchInput.focus();

    }

});


closeSearch.addEventListener("click", () => {

    searchBox.classList.remove("show");

    searchInput.value = "";

    showAllProducts();

});


searchInput.addEventListener("input", () => {

    const search =
        searchInput.value
            .toLowerCase()
            .trim();

    let visibleProducts = 0;


    productCards.forEach(card => {

        const name =
            card.dataset.name.toLowerCase();

        const content =
            card.textContent.toLowerCase();


        if (
            name.includes(search) ||
            content.includes(search)
        ) {

            card.style.display = "block";

            visibleProducts++;

        }

        else {

            card.style.display = "none";

        }

    });


    productCount.textContent =
        visibleProducts +
        (
            visibleProducts > 1
                ? " produits"
                : " produit"
        );

});


/* =========================
   AFFICHER TOUS LES PRODUITS
========================= */

function showAllProducts() {

    productCards.forEach(card => {

        card.style.display = "block";

    });

    productCount.textContent =
        productCards.length +
        " produits";

}