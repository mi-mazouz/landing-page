function handleWindowScroll() {
  handleNavBarCss();
  handleHeaderItemSection();
}

function handleWindowResize() {
  handleHeaderItemSection();
}

window.onscroll = handleWindowScroll;
window.onresize = handleWindowResize;
