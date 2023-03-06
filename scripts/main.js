(function () {
  const openMobileMenuBtn = document.querySelector(".burger-menu");
  const mobileMenuBtnContainer = document.querySelector(".burger-menu-container");
  const headerLogo = document.querySelector(".logo");
  const heroTitle = document.querySelector(".hero-title");

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
    const headerMenu = document.querySelector(".nav-container");
    const navigationContainer = document.querySelector(".nav-right-pane");
    const navigationMenuItems = document.querySelectorAll(".nav-item");
    const navigationImage = document.querySelector(".nav-left-pane-image");
    const navigationSocial = document.querySelector(".nav-social-icons");
    const navigationCopy = document.querySelector(".nav-text-container");

    if(openMobileMenuBtn.classList.contains("open")) {
      //// Close menu
      navigationMenuItems.forEach((item, index)=> {
        item.style.animation = `slideInDownText 500ms ease-in-out ${(index+1) * 100}ms`;
      });
      toggleClassesOnCloseMenu(navigationContainer, "slide-in-up", "slide-in-down");
      toggleClassesOnCloseMenu(navigationImage, "fade-in-bottom-left", "fade-in-bottom-right");
      toggleClassesOnCloseMenu(navigationSocial, "slide-in-right", "slide-in-left");
      toggleClassesOnCloseMenu(navigationCopy, "fade-in", "fade-out");

      setTimeout(() => {
        openMobileMenuBtn.classList.remove("open");
        headerMenu.classList.remove("active");
      }, "700");

    } else {
      //// Open menu
      headerMenu.classList.add("active");
      openMobileMenuBtn.classList.add("open");
      toggleClassesOnOpenMenu(navigationContainer, "slide-in-up", "slide-in-down");
      navigationMenuItems.forEach((item, index)=> {
        item.style.animation = `slideInUpText 1500ms ease-in-out ${(index+1) * 100}ms`;
      });
      toggleClassesOnOpenMenu(navigationImage, "fade-in-bottom-left", "fade-in-bottom-right");
      toggleClassesOnOpenMenu(navigationSocial, "slide-in-right", "slide-in-left");
      toggleClassesOnOpenMenu(navigationCopy, "fade-in", "fade-out");
    }
  })

  const applyParallax = element => {
    element.addEventListener('mousemove', e => {
      const { width, height } = element.getBoundingClientRect();
      const offX = e.pageX - (width * 0.5);
      const offY = e.pageY - (height * 0.5);
      const speed = element.getAttribute('data-speed')
      const x = (offX * speed) / 100;
      const y = (offY * speed) / 100;
      element.style.transform = `translateX(${x}px) translateY(${y}px)`;
      element.style.animation = "all ease-in-out 1s";
    });

    element.addEventListener('mouseleave', e => {
        element.style.transform = `translateX(0px) translateY(0px)`;
    });
  };

  applyParallax(headerLogo);
  applyParallax(mobileMenuBtnContainer);
  applyParallax(heroTitle);

})();
