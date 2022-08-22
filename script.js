let isOpen = false;

function openMenu() {
    const container = document.getElementById("containerMenu");

    if (isOpen) {
        container.style.display = "none";
        isOpen = false;
    } else {
        container.style.display = "flex";

        isOpen = true;
    }
}