export const formatName = (name: string) => {
    return encodeURIComponent(
        name
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replaceAll(" ", "-")
            .replaceAll("/", "-")
            .replaceAll("?", "-")
            .replaceAll("&", "-")
            .replaceAll("=", "-")
            .replaceAll("%", "-")
            .replaceAll("#", "-")
            .replaceAll("$", "-")
            .replaceAll("@", "-")
            .replaceAll("`", "-")
            .replaceAll("\\", "-")
            .replaceAll(":", "-")
            .replaceAll(";", "-")
            .replaceAll("'", "-")
            .replaceAll('"', "-")
            .replaceAll(",", "-")
            .replaceAll(".", "-")
            .replaceAll("á", "a")
            .replaceAll("é", "e")
            .replaceAll("í", "i")
            .replaceAll("ó", "o")
            .replaceAll("ú", "u")
            .replaceAll("ñ", "n")
            .replaceAll("Á", "a")
            .replaceAll("É", "e")
            .replaceAll("Í", "i")
            .replaceAll("Ó", "o")
            .replaceAll("Ú", "u")
            .replaceAll("Ñ", "n")
    );
};



export const openSidebar = () => {
    const mobileMenu = document.getElementById("mobileMenu") as HTMLDivElement;
    const contactSidebar = document.getElementById("contactSidebar");
    const sidebarOverlay = document.getElementById("sidebarOverlay");
    contactSidebar?.classList.remove("translate-x-full");
    sidebarOverlay?.classList.remove("opacity-0", "pointer-events-none");
    document.body.style.overflow = "hidden";
    // Si estamos en móvil, cerrar el menú móvil también
    mobileMenu?.classList.add("hidden");
    mobileMenu?.classList.remove("menu-enter");
};