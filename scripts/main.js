const openMobileMenuBtn = document.querySelector(".burger-menu");
const headerMenu = document.querySelector(".nav-container");

openMobileMenuBtn.addEventListener("click", () => {
  
  if(openMobileMenuBtn.classList.contains("open")) {
    openMobileMenuBtn.classList.remove("open");
    headerMenu.classList.remove("active");
  } else {
    headerMenu.classList.add("active");
    openMobileMenuBtn.classList.add("open");
  }
})
