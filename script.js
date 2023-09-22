window.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.querySelector(".open-burger");
    const menu = document.querySelector("nav")
    const menuList = document.querySelector("nav ul")
    let isMenuOpen = false

    menuBtn.style.display = "none"

    function OpenMenuBurger() {
        const menuBurger = document.createElement("ul")
        const burgerItem1 = document.createElement("li")
        const burgerItem2 = document.createElement("li")
        const burgerItem3 = document.createElement("li")
        const burgerItem4 = document.createElement("li")
        const closeBtn = document.createElement("img")

        burgerItem1.innerHTML = "<a href='index.html'>À propos</a>"
        burgerItem2.innerHTML = "<a href='index.html'>Prestations</a>"
        burgerItem2.innerHTML = "<a href='index.html'>Tarifs</a>"
        burgerItem3.innerHTML = "<a href='index.html'>Prendre rendez-vous</a>"
       
        menuBurger.classList.add("menu2")
        closeBtn.classList.add("close-menu")
        closeBtn.setAttribute("src", "assets/close.png")

        closeBtn.addEventListener("click", () => {
            menuBurger.style.display = "none"
        })

        menu.appendChild(menuBurger)
        menuBurger.appendChild(burgerItem1)
        menuBurger.appendChild(burgerItem2)
        menuBurger.appendChild(burgerItem3)
        menuBurger.appendChild(burgerItem4)
        menuBurger.appendChild(closeBtn)

        isMenuOpen = true
    }

    function closeMenuBurger() {
        if (isMenuOpen) {
            const menuBurger = menu.querySelector(".menu2")
            if (menuBurger) {
                menuBurger.remove()
            }
            //menuList.style.display = "flex"; // Afficher le menu complet
            isMenuOpen = false; // Mettre à jour l'état du menu (fermé)
        }
    }

    function checkWindowSize() {
        if (window.innerWidth <= 978) {
            menuList.style.display = "none";
            menuBtn.style.display = "flex";
        } else {
            closeMenuBurger();
            menuBtn.style.display = "none";
            //menuList.style.display = "flex";
        }
    }

    // Vérifier la largeur de la fenêtre lors du chargement initial
    checkWindowSize();

    // Mettre à jour l'état du menu lorsqu'on redimensionne la fenêtre
    window.addEventListener("resize", () => {
        checkWindowSize();
    });

    // Ajouter un événement de clic sur le bouton du menu burger
    menuBtn.addEventListener("click", () => {
        if (isMenuOpen) {
            closeMenuBurger();
        } else {
            OpenMenuBurger();
        }
    });
    console.log(menuBtn)
});