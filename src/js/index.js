function handleWindowScroll() {
  handleNavBarCss();
  handleHeaderItemSection();
}

function handleWindowResize() {
  handleHeaderItemSection();
}

function handleModal(title, subtitleKey, bodyText) {
  const html = $('html');
  const modal = $('.modal');

  if (modal.hasClass('is-active')) {
    html.removeClass('is-clipped');
    modal.removeClass('is-active');
    return;
  }

  html.addClass('is-clipped');
  $(modal.find('.modal-card-title')).text(title);
  $(modal.find('.modal-card-subtitle')).text(i18next.t(subtitleKey));
  $(modal.find('.modal-card-body').text(i18next.t(bodyText)));
  $(modal).addClass('is-active');
}

function isMobile() {
  let isMobile = false;

  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    isMobile = true;
  }

  return isMobile;
}

window.onscroll = handleWindowScroll;
window.onresize = handleWindowResize;
