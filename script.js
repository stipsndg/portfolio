

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        if (window.scrollY > lastScrollY) {
            // Hide header when scrolling down
            header.classList.add("hidden");
        }
        // No need to show header when scrolling up, so remove the else part
        lastScrollY = window.scrollY;
    });
});
