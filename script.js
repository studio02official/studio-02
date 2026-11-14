const VINTED_PROFILE = "https://www.vinted.fr/member/3146694365";

const NEW_TITLE = "Cet article est neuf, sans étiquette.";
const USED_TITLE = "Ce produit est en excellent état et a été porté quelques fois.";


// ============================================
// PRODUITS
// ============================================

const products = {

    pulls: [
        {
            id: "corteiz",
            name: "Pull Corteiz C-Star Rose",
            price: "49,90 €",
            image: "images/pull-corteiz-rose.png",
            condition: "used",
            size: "M"
        },
        {
            id: "cp-company",
            name: "Pull CP Company Noir",
            price: "39,90 €",
            image: "images/pull-cp-company-noir.png",
            condition: "new",
            size: "M"
        },
        {
            id: "zip-ralph-lauren",
            name: "Zip Ralph Lauren Gris Clair",
            price: "44,90 €",
            image: "images/zip-ralph-lauren-gris-clair.png",
            condition: "new",
            size: "M"
        }
    ],

    vestes: [
        {
            id: "nike-brazil-noir",
            name: "Veste Nike Brazil Noir",
            price: "52,90 €",
            image: "images/veste-nike-brazil-noir.png",
            condition: "new",
            size: "M"
        },
        {
            id: "nike-brazil-blanc",
            name: "Veste Nike Brazil Blanc",
            price: "52,90 €",
            image: "images/veste-nike-brazil-blanc.png",
            condition: "new",
            size: "M"
        },
        {
            id: "nike-brazil-bleu",
            name: "Veste Nike Brazil Bleu",
            price: "52,90 €",
            image: "images/veste-nike-brazil-bleu.png",
            condition: "new",
            size: "M"
        },
        {
            id: "cardigan-moncler",
            name: "Cardigan Moncler Noir",
            price: "99,90 €",
            image: "images/cardigan-moncler-noir.png",
            condition: "new",
            size: "M"
        }
    ],

    chaussures: [
        {
            id: "chanel",
            name: "Chanel Runner",
            price: "104,90 €",
            image: "images/chanel-runner.png",
            condition: "new",
            size: "43"
        },
        {
            id: "dior-b22",
            name: "Dior B22 Gris/Rose",
            price: "64,90 €",
            image: "images/dior-b22-gris-rose.png",
            condition: "new",
            size: "43"
        }
    ],

    accessoires: [
        {
            id: "casquette",
            name: "Casquette Gucci rose",
            price: "42,90 €",
            image: "images/casquette-gucci-rose.png",
            condition: "new",
            size: "M"
        },
        {
            id: "ceinture-lv-noir-pur",
            name: "Ceinture LV Noir Pur",
            price: "23,90 €",
            image: "images/ceinture-lv-noir-pur.png",
            condition: "new",
            size: "110 cm"
        }
    ],

    selection: [
        {
            id: "cardigan-moncler",
            name: "Cardigan Moncler Noir",
            price: "99,90 €",
            image: "images/cardigan-moncler-noir.png",
            condition: "new",
            size: "M"
        },
        {
            id: "nike-brazil-blanc",
            name: "Veste Nike Brazil Blanc",
            price: "52,90 €",
            image: "images/veste-nike-brazil-blanc.png",
            condition: "new",
            size: "M"
        },
        {
            id: "chanel",
            name: "Chanel Runner",
            price: "104,90 €",
            image: "images/chanel-runner.png",
            condition: "new",
            size: "43"
        },
        {
            id: "cp-company",
            name: "Pull CP Company Noir",
            price: "39,90 €",
            image: "images/pull-cp-company-noir.png",
            condition: "new",
            size: "M"
        }
    ]

};


// ============================================
// NAVIGATION ET PAGES
// ============================================

const mainContent = document.getElementById("mainContent");
const navigation = document.querySelector(".categories");

let previousPage = "home";


// Ajouter Accessoires dans la navigation

const selectionLink = navigation.querySelector(
    '[data-page="selection"]'
);

const accessoiresLink = document.createElement("a");

accessoiresLink.href = "#";
accessoiresLink.dataset.page = "accessoires";
accessoiresLink.textContent = "Accessoires";

navigation.insertBefore(accessoiresLink, selectionLink);


// Créer la page Accessoires

const accessoiresPage = document.createElement("section");

accessoiresPage.className = "page";
accessoiresPage.id = "accessoires";

accessoiresPage.innerHTML = `
    <div class="category-header">
        <h1>Accessoires</h1>
        <p>Découvrez notre sélection d'accessoires.</p>
    </div>

    <div class="category-products" id="products-accessoires"></div>
`;

mainContent.insertBefore(
    accessoiresPage,
    document.getElementById("selection")
);


// ============================================
// TAILLES DES PRODUITS
// ============================================

function createSizeSelector(size) {

    return `
        <div class="size-selector">

            <label for="size-${size.replace(/\s/g, "-")}">
                Taille
            </label>

            <select
                class="product-size-select"
                id="size-${size.replace(/\s/g, "-")}"
                aria-label="Choisir une taille"
            >
                <option value="${size}" selected>
                    ${size}
                </option>
            </select>

        </div>
    `;

}


// ============================================
// MISE À JOUR DES PRODUITS DE L'ACCUEIL
// ============================================

function updateHomeProduct(oldId, product) {

    const card = document.querySelector(
        `#home [data-product="${oldId}"]`
    );

    if (!card) return;

    card.dataset.product = product.id;

    const image = card.querySelector(".product-image img");
    const title = card.querySelector(".product-info h2");
    const price = card.querySelector(".product-price");
    const badge = card.querySelector(".condition-badge");

    image.src = product.image;
    image.alt = product.name;

    title.textContent = product.name;
    price.textContent = product.price;

    badge.textContent =
        product.condition === "new" ? "NEUF" : "OCCASION";

    badge.className = "condition-badge " + product.condition;

    badge.title =
        product.condition === "new" ? NEW_TITLE : USED_TITLE;

}


// Remplacer les deux premiers produits

updateHomeProduct("casquette", products.vestes[3]);
updateHomeProduct("corteiz", products.vestes[1]);


// Corriger le titre du produit CP Company sur l'accueil

const cpHomeTitle = document.querySelector(
    '#home [data-product="cp-company"] .product-info h2'
);

if (cpHomeTitle) {
    cpHomeTitle.textContent = "Pull CP Company Noir";
}


// ============================================
// CARTES PRODUITS
// ============================================

function createProductCard(product) {

    const article = document.createElement("a");

    article.className = "product-card";
    article.href = "#";
    article.dataset.product = product.id;

    const conditionText =
        product.condition === "new" ? "NEUF" : "OCCASION";

    const conditionTitle =
        product.condition === "new" ? NEW_TITLE : USED_TITLE;

    article.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
        </div>

        <div class="product-info">

            <h2>${product.name}</h2>

            <div class="product-price-row">
                <p class="product-price">${product.price}</p>

                <span
                    class="condition-badge ${product.condition}"
                    title="${conditionTitle}"
                >
                    ${conditionText}
                </span>
            </div>

        </div>
    `;

    return article;

}


// ============================================
// FICHES PRODUITS
// ============================================

function createProductPage(product, number) {

    const pageId = "product-" + product.id;

    let page = document.getElementById(pageId);

    const conditionText =
        product.condition === "new" ? "NEUF" : "OCCASION";

    const conditionTitle =
        product.condition === "new" ? NEW_TITLE : USED_TITLE;


    // Créer la fiche si elle n'existe pas

    if (!page) {

        page = document.createElement("section");

        page.className = "page product-detail-page";
        page.id = pageId;

        mainContent.appendChild(page);

    }


    // Mettre à jour son contenu

    page.innerHTML = `

        <button class="back-button" data-back="true">

            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>

            <span>Retour à la sélection</span>

        </button>

        <div class="product-detail">

            <div class="product-detail-image">
                <img src="${product.image}" alt="${product.name}">
            </div>

            <div class="product-detail-info">

                <p class="detail-kicker">
                    STUDIO 02 / PIÈCE ${String(number).padStart(2, "0")}
                </p>

                <h1>${product.name}</h1>

                <div class="detail-price-row">

                    <p class="detail-price">
                        ${product.price}
                    </p>

                    <span
                        class="condition-badge ${product.condition}"
                        title="${conditionTitle}"
                    >
                        ${conditionText}
                    </span>

                </div>

                ${createSizeSelector(product.size)}

                <p class="detail-description">
                    Découvrez cette pièce sélectionnée par STUDIO 02.
                </p>

                <a
                    class="vinted-buy-button"
                    href="${VINTED_PROFILE}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Acheter sur Vinted
                </a>

            </div>

        </div>

    `;

}


// ============================================
// REMPLISSAGE DES CATÉGORIES
// ============================================

let productNumber = 1;

Object.entries(products).forEach(([category, categoryProducts]) => {

    const container = document.getElementById(
        "products-" + category
    );

    if (!container) return;

    categoryProducts.forEach(product => {

        container.appendChild(
            createProductCard(product)
        );

        createProductPage(product, productNumber);

        productNumber++;

    });


    // Emplacements vides pour les futurs produits
    // Sauf dans Notre sélection

    if (category !== "selection") {

        const remainingSlots = 16 - categoryProducts.length;

        for (let i = 0; i < remainingSlots; i++) {

            const placeholder = document.createElement("a");

            placeholder.className = "product-card";
            placeholder.href = VINTED_PROFILE;
            placeholder.target = "_blank";
            placeholder.rel = "noopener noreferrer";

            placeholder.innerHTML = `
                <div class="product-image"></div>

                <div class="product-info">
                    <h2>------ ------ -----</h2>
                    <p class="product-price">.....</p>
                </div>
            `;

            placeholder.style.animationDelay =
                ((categoryProducts.length + i) * 0.04) + "s";

            container.appendChild(placeholder);

        }

    }

});


// ============================================
// RETOUR À LA PAGE PRÉCÉDENTE
// ============================================

function showPage(pageName, rememberPrevious = true) {

    const targetPage = document.getElementById(pageName);

    if (!targetPage) return;

    const currentPage = document.querySelector(".page.active");

    if (
        rememberPrevious &&
        currentPage &&
        !currentPage.id.startsWith("product-") &&
        pageName.startsWith("product-")
    ) {
        previousPage = currentPage.id;
    }

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    targetPage.classList.add("active");

    document.body.classList.toggle(
        "home-view",
        pageName === "home"
    );

    document.body.classList.remove("scrolled");

    document.querySelectorAll(".categories a").forEach(category => {
        category.classList.remove("selected");
    });

    const selectedCategory = document.querySelector(
        `.categories a[data-page="${pageName}"]`
    );

    if (selectedCategory) {
        selectedCategory.classList.add("selected");
    }

    searchContainer.classList.remove("active");
    searchInput.value = "";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ============================================
// GESTION DES CLICS
// ============================================

document.addEventListener("click", event => {

    // Bouton retour d'une fiche produit

    const backButton = event.target.closest(".back-button");

    if (backButton) {

        event.preventDefault();

        showPage(previousPage, false);

        return;

    }


    // Clic sur une carte produit

    const productCard = event.target.closest("[data-product]");

    if (productCard) {

        event.preventDefault();

        showPage("product-" + productCard.dataset.product);

        return;

    }


    // Navigation entre les catégories

    const pageLink = event.target.closest("[data-page]");

    if (pageLink) {

        event.preventDefault();

        showPage(pageLink.dataset.page);

    }

});


// ============================================
// NAVIGATION AU SCROLL
// ============================================

function updateNavbar() {

    const hero = document.querySelector(".hero");

    if (
        !hero ||
        !document.body.classList.contains("home-view")
    ) {
        return;
    }

    const heroBottom = hero.getBoundingClientRect().bottom;

    if (heroBottom <= 85) {
        document.body.classList.add("scrolled");
    } else {
        document.body.classList.remove("scrolled");
    }

}

window.addEventListener("scroll", updateNavbar);
window.addEventListener("resize", updateNavbar);


// ============================================
// RECHERCHE
// ============================================

const searchButton = document.getElementById("searchButton");
const searchContainer = document.querySelector(".search-container");
const searchInput = document.getElementById("searchInput");
const searchForm = document.getElementById("searchForm");


searchButton.addEventListener("click", () => {

    searchContainer.classList.toggle("active");

    if (searchContainer.classList.contains("active")) {
        searchInput.focus();
    } else {
        searchInput.value = "";
    }

});


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        searchContainer.classList.remove("active");
        searchInput.value = "";

    }

});


searchForm.addEventListener("submit", event => {

    event.preventDefault();

    const searchValue = searchInput.value.trim();

    if (searchValue !== "") {

        alert(
            "La recherche de produits sera activée lorsque nous aurons ajouté les articles."
        );

    }

});


// ============================================
// DIAPORAMAS ET FLÈCHES
// ============================================

function setupSlideshow(containerSelector, slideSelector) {

    const container = document.querySelector(containerSelector);

    if (!container) return;

    const slideshowSlides = container.querySelectorAll(slideSelector);

    if (slideshowSlides.length < 2) return;

    let currentIndex = 0;


    function displaySlide(index) {

        slideshowSlides[currentIndex].classList.remove("active");

        currentIndex =
            (index + slideshowSlides.length) % slideshowSlides.length;

        slideshowSlides[currentIndex].classList.add("active");

    }


    function nextSlide() {
        displaySlide(currentIndex + 1);
    }


    function previousSlide() {
        displaySlide(currentIndex - 1);
    }


    // Création des flèches

    const previousButton = document.createElement("button");

    previousButton.className = "slideshow-arrow slideshow-arrow-left";
    previousButton.setAttribute("aria-label", "Photo précédente");

    previousButton.innerHTML = `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" />
        </svg>
    `;


    const nextButton = document.createElement("button");

    nextButton.className = "slideshow-arrow slideshow-arrow-right";
    nextButton.setAttribute("aria-label", "Photo suivante");

    nextButton.innerHTML = `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 18l6-6-6-6" />
        </svg>
    `;


    container.appendChild(previousButton);
    container.appendChild(nextButton);


    // Clic sur les flèches

    previousButton.addEventListener("click", event => {

        event.stopPropagation();

        previousSlide();

    });


    nextButton.addEventListener("click", event => {

        event.stopPropagation();

        nextSlide();

    });


    // Défilement automatique

    setInterval(nextSlide, 6000);

}


// Diaporama principal

setupSlideshow(".hero", ".slide");


// Diaporama de la sélection

setupSlideshow(".editorial-slideshow", ".editorial-slide");