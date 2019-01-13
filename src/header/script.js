function handleBugerBarsMarginTop(burgerLink, isMarginTopWillApply) {
  _.forEach(burgerLink.children, (span, index) => {
    span.style.marginTop = isMarginTopWillApply
      ? `${index * 4 - 4}px`
      : "inherit";
  });
}

function onClickBurgerLink() {
  const navbarMenu = document.getElementById("navbarMenu");
  const navbarButtons = document.getElementById("navbarButtons");
  const navbarEnd = document.getElementById("navbarEnd");

  if (navbarMenu.classList.contains("is-active")) {
    const isMarginWillApply = true;

    navbarMenu.classList.remove("is-active");
    navbarEnd.classList.remove("fadeInDown");
    burgerLink.classList.remove("is-active");
    navbarButtons.style.flexDirection = "row";

    handleBugerBarsMarginTop(burgerLink, isMarginWillApply);
  } else {
    const isMarginWillApply = false;

    navbarMenu.classList.add("is-active");
    navbarEnd.classList.add("fadeInDown");
    burgerLink.classList.add("is-active");
    navbarButtons.style.flexDirection = "column";

    handleBugerBarsMarginTop(burgerLink, isMarginWillApply);
  }
}

// function handleWindowScroll(a) {
//   const navbar = document.getElementById("navbar");

//   console.log(window.scrollY, navbar.style.backgroundColor);
//   if (window.scrollY > 0) {
//     navbar.style.backgroundColor = "#9da0a7";
//   } else {
//     navbar.style.backgroundColor = "#333333";
//   }

//   console.log(window.scrollY, navbar.style.backgroundColor);
// }

const burgerLink = document.getElementById("burgerLink");
const isMarginWillApply = true;

handleBugerBarsMarginTop(burgerLink, isMarginWillApply);
// window.onscroll = handleWindowScroll;
burgerLink.onclick = onClickBurgerLink;
