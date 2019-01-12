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

  if (navbarMenu.classList.contains("is-active")) {
    const isMarginWillApply = true;

    navbarMenu.classList.remove("is-active");
    navbarMenu.classList.remove("fadeInDown");
    burgerLink.classList.remove("is-active");
    navbarButtons.style.flexDirection = "row";

    handleBugerBarsMarginTop(burgerLink, isMarginWillApply);
  } else {
    const isMarginWillApply = false;

    navbarMenu.classList.add("fadeInDown");
    navbarMenu.classList.add("is-active");
    burgerLink.classList.add("is-active");
    navbarButtons.style.flexDirection = "column";

    handleBugerBarsMarginTop(burgerLink, isMarginWillApply);
  }
}

const burgerLink = document.getElementById("burgerLink");
const isMarginWillApply = true;

handleBugerBarsMarginTop(burgerLink, isMarginWillApply);
burgerLink.onclick = onClickBurgerLink;
