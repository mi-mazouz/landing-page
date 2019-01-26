function handleWindowScroll() {
  const navbar = document.getElementById("navbar2");
  const menuLinks = document.getElementById("navbarButtons").children;
  const burgerLink = document.getElementById("burgerLink");
  const languagesButton = _.filter(
    document.getElementById("language-typography-wrapper").children,
    (_, index) => index !== 1
  );

  if (window.scrollY > 200) {
    navbar.style.display = "flex";
    navbar.classList.add("is-fixed-top");
    navbar.style.backgroundColor = "#4f4f4f";

    _.forEach(languagesButton, languageButton => {
      languageButton.onmouseover = () => (languageButton.style.color = "white");
      languageButton.onmouseout = () =>
        (languageButton.style.color = "#9da0a7");
    });
    _.forEach(menuLinks, menuLink => {
      menuLink.onmouseover = () => (menuLink.style.color = "white");
      menuLink.onmouseout = () => (menuLink.style.color = "#9da0a7");
    });

    burgerLink.onmouseover = () =>
      _.forEach(
        burgerLink.children,
        burgerLinkChildren => (burgerLinkChildren.style.color = "white")
      );
    burgerLink.onmouseout = () =>
      _.forEach(
        burgerLink.children,
        burgerLinkChildren => (burgerLinkChildren.style.color = "#9da0a7")
      );
  } else {
    navbar.classList.remove("is-fixed-top");
    navbar.style.display = "none";
    navbar.style.backgroundColor = "transparent";

    _.forEach(languagesButton, languageButton => {
      languageButton.onmouseover = () =>
        (languageButton.style.color = "#4f4f4f");
      languageButton.onmouseout = () =>
        (languageButton.style.color = "#9da0a7");
    });
    _.forEach(menuLinks, menuLink => {
      menuLink.onmouseover = () => (menuLink.style.color = "#4f4f4f");
      menuLink.onmouseout = () => (menuLink.style.color = "#9da0a7");
    });
    burgerLink.onmouseover = () =>
      _.forEach(
        burgerLink.children,
        burgerLinkChildren => (burgerLinkChildren.style.color = "#4f4f4f")
      );
    burgerLink.onmouseout = () =>
      _.forEach(
        burgerLink.children,
        burgerLinkChildren => (burgerLinkChildren.style.color = "#9da0a7")
      );
  }
}

window.onscroll = handleWindowScroll;
