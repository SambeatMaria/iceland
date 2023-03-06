const openMobileMenuBtn = document.querySelector(".burger-menu");
const MobileMenuBtnContainer = document.querySelector(".burger-menu-container");
const headerMenu = document.querySelector(".nav-container");
const headerLogo  = document.querySelector(".logo");
const navigationContainer = document.querySelector(".nav-right-pane");
const navigationImage = document.querySelector(".nav-left-pane-image");
const navigationSocial = document.querySelector(".nav-social-icons");
const navigationCopy = document.querySelector(".nav-text-container");

openMobileMenuBtn.addEventListener("click", () => {
  if(openMobileMenuBtn.classList.contains("open")) {
    //// Cerrar menu
    navigationContainer.classList.remove("slide-in-up");
    navigationContainer.classList.add("slide-in-down");
    navigationImage.classList.remove("fade-in-bottom-left");
    navigationImage.classList.add("fade-in-bottom-right");
    navigationSocial.classList.remove("slide-in-right");
    navigationSocial.classList.add("slide-in-left");
    navigationCopy.classList.remove("fade-in");
    navigationCopy.classList.add("fade-out");
    setTimeout(() => {
      openMobileMenuBtn.classList.remove("open");
      headerMenu.classList.remove("active");
    }, "900");

    headerLogo.classList.add("parallax");
    MobileMenuBtnContainer.classList.add("parallax");
  } else {
    //// Abrir menu
    headerMenu.classList.add("active");
    openMobileMenuBtn.classList.add("open");
    if(navigationContainer.classList.contains("slide-in-down")) {
      navigationContainer.classList.remove("slide-in-down");
    }
    if(navigationImage.classList.contains("fade-in-bottom-right")) {
      navigationImage.classList.remove("fade-in-bottom-right");
    }
    if(navigationSocial.classList.contains("slide-in-left")) {
      navigationSocial.classList.remove("slide-in-left");
    }
    if(navigationCopy.classList.contains("fade-out")) {
      navigationCopy.classList.remove("fade-out");
    }
    navigationContainer.classList.add("slide-in-up");
    navigationImage.classList.add("fade-in-bottom-left");
    navigationSocial.classList.add("slide-in-right");
    navigationCopy.classList.add("fade-in");

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
