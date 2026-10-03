const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
        menuButton.setAttribute("aria-expanded", String(!isExpanded));
        menuButton.setAttribute("aria-label", isExpanded ? "Otvori navigaciju" : "Zatvori navigaciju");
        navigation.classList.toggle("is-open", !isExpanded);
    });

    navigation.addEventListener("click", (event) => {
        if (event.target.closest("a")) {
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Otvori navigaciju");
            navigation.classList.remove("is-open");
        }
    });
}

const lightbox = document.querySelector(".lightbox");

if (lightbox) {
    const lightboxImage = lightbox.querySelector("img");
    const lightboxCaption = lightbox.querySelector("p");
    const closeButton = lightbox.querySelector(".lightbox-close");

    document.querySelectorAll(".gallery-item").forEach((item) => {
        item.addEventListener("click", () => {
            lightboxImage.src = item.dataset.full;
            lightboxImage.alt = item.querySelector("img").alt;
            lightboxCaption.textContent = item.dataset.caption;
            lightbox.showModal();
        });
    });

    closeButton.addEventListener("click", () => lightbox.close());
    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) lightbox.close();
    });
}
