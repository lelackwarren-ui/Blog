/* =========================
   MENU MOBILE
========================= */

const mobileBtn = document.getElementById("mobileBtn");
const navMenu = document.getElementById("navMenu");

mobileBtn.addEventListener("click", () => {

    navMenu.classList.toggle("show");

    const icon = mobileBtn.querySelector("i");

    if (navMenu.classList.contains("show")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* =========================
   FERMER MENU APRÈS CLIC
========================= */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

        const icon = mobileBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================
   RECHERCHE
========================= */

const searchBtn = document.getElementById("searchBtn");
const searchBox = document.getElementById("searchBox");
const closeSearch = document.getElementById("closeSearch");
const searchInput = document.getElementById("searchInput");

searchBtn.addEventListener("click", () => {

    searchBox.classList.toggle("show");

    if (searchBox.classList.contains("show")) {
        searchInput.focus();
    }

});

closeSearch.addEventListener("click", () => {

    searchBox.classList.remove("show");
    searchInput.value = "";

});


/* =========================
   RECHERCHE DANS LES ARTICLES
========================= */

searchInput.addEventListener("keyup", () => {

    const searchValue =
        searchInput.value.toLowerCase().trim();

    const articles =
        document.querySelectorAll(".article-card");

    articles.forEach(article => {

        const text =
            article.textContent.toLowerCase();

        if (text.includes(searchValue)) {

            article.style.display = "";

        } else {

            article.style.display = "none";

        }

    });

});


/* =========================
   NEWSLETTER
========================= */

const newsletterForm =
    document.getElementById("newsletterForm");

const emailInput =
    document.getElementById("email");

const newsletterMessage =
    document.getElementById("newsletterMessage");


newsletterForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = emailInput.value.trim();

    if (email === "") {

        newsletterMessage.textContent =
            "Veuillez entrer votre adresse e-mail.";

        return;
    }

    newsletterMessage.textContent =
        "Merci ! Vous êtes maintenant inscrit.";

    newsletterForm.reset();

});


/* =========================
   CATÉGORIES
========================= */

const categoryButtons =
    document.querySelectorAll(".category-btn");

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        const category =
            button.dataset.category;

        const articles =
            document.querySelectorAll(".article-card");

        articles.forEach(article => {

            const articleCategory =
                article.querySelector(".category");

            if (!articleCategory) {
                return;
            }

            const categoryText =
                articleCategory.textContent.trim();

            if (
                category === categoryText ||
                category === "Culture" &&
                categoryText === "Culture"
            ) {

                article.style.display = "";

            } else {

                article.style.display = "none";

            }

        });

        document
            .getElementById("blog")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});


/* =========================
   ANIMATION AU SCROLL
========================= */

const cards =
    document.querySelectorAll(
        ".article-card, .product-card"
    );

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.1
        }
    );


cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(20px)";

    card.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(card);

});