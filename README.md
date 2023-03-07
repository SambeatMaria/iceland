# 🏔️ Iceland
Animated navigation exercise with HTML, SCSS and pure Javascript.

![alt text](assets/readme-image.jpg)

## 🖊️ Notes
### 👩🏼‍💻 Languages/Technologies
- HTML
- SCSS
- Vanilla JS
- VScode <br>
**No frameworks or libraries used for this project**.


### 🎨 Defined styles
The structure is 100% responsive and styles are defined with mobile first approach.</br>
Created 3 different stylesheets with SASS:
- `main.scss` For all custom styles
- `_base.scss` To define style variables and mixin functions for responsive breakpoints
- `_animations.scss` To define the element's animations


Responsive Breakpoints mixins:
```
@mixin until-tablet {
  @media (min-width: 0) and (max-width: #{$tablet-width - 1px}) {
    @content;
  }
}

@mixin tablet {
  @media (min-width: #{$tablet-width}) and (max-width: #{$desktop-width - 1px}) {
    @content;
  }
}

@mixin from-tablet {
  @media (min-width: #{$tablet-width}) {
    @content;
  }
}

@mixin desktop {
  @media (min-width: #{$desktop-width}) {
    @content;
  }
}
```
### 💫 JS animations
Animations are triggered by functions declared with **pure JavaScript**, this helps the web run faster without having any framework dependency.

The menu opens an animated top layer with CSS selectors that are activated and deactivated by javascript through different functions:

```
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
```

In the homepage we also have animated elements such as the hero title or the logo, which have a simple parallax animation on mouse move:
```
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
```

### 🚀 How to try it

Just download the files and open index file.<br>
**It is a simple and functional project, using SCSS to make it easier to scale in the future.**

And that's all :) Thank you for watching it! 👋
