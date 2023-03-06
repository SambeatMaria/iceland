const openMobileMenuBtn = document.querySelector(".burger-menu");
const MobileMenuBtnContainer = document.querySelector(".burger-menu-container");
const headerMenu = document.querySelector(".nav-container");
const headerLogo  = document.querySelector(".logo");
const navigationContainer = document.querySelector(".nav-right-pane");
const navigationImage = document.querySelector(".nav-left-pane-image");
const navigationSocial = document.querySelector(".nav-social-icons");
const navigationCopy = document.querySelector(".nav-text-container");

function toggleClassesOnCloseMenu(element, classIn, classOut) {
  element.classList.remove(classIn);
  element.classList.add(classOut);
}

function toggleClassesOnOpenMenu(element, classIn, classOut) {
  if(element.classList.contains(classOut)) {
    element.classList.remove(classOut);
  }
  element.classList.add(classIn);
}

openMobileMenuBtn.addEventListener("click", () => {
  if(openMobileMenuBtn.classList.contains("open")) {
    //// Cerrar menu
    toggleClassesOnCloseMenu(navigationContainer, "slide-in-up", "slide-in-down");
    toggleClassesOnCloseMenu(navigationImage, "fade-in-bottom-left", "fade-in-bottom-right");
    toggleClassesOnCloseMenu(navigationSocial, "slide-in-right", "slide-in-left");
    toggleClassesOnCloseMenu(navigationCopy, "fade-in", "fade-out");

    setTimeout(() => {
      openMobileMenuBtn.classList.remove("open");
      headerMenu.classList.remove("active");
    }, "700");

    headerLogo.classList.add("parallax");
    MobileMenuBtnContainer.classList.add("parallax");

  } else {
    //// Abrir menu
    headerMenu.classList.add("active");
    openMobileMenuBtn.classList.add("open");
    toggleClassesOnOpenMenu(navigationContainer, "slide-in-up", "slide-in-down");
    toggleClassesOnOpenMenu(navigationImage, "fade-in-bottom-left", "fade-in-bottom-right");
    toggleClassesOnOpenMenu(navigationSocial, "slide-in-right", "slide-in-left");
    toggleClassesOnOpenMenu(navigationCopy, "fade-in", "fade-out");

    headerLogo.classList.remove("parallax");
    MobileMenuBtnContainer.classList.remove("parallax");
  }
})

document.addEventListener("mousemove", parallax);
function parallax(e){
    this.querySelectorAll('.parallax').forEach(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/100
        const y = (window.innerHeight - e.pageY*speed)/100

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}
