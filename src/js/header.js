function onMenuButtonClick() {
  const navbarMobile = $('.navbar-mobile');

  navbarMobile.css('transform', 'translateX(0px)');
}

function onCloseMenuButtonClick() {
  const navbarMobile = $('.navbar-mobile');

  navbarMobile.css('transform', 'translateX(200px)');
}

function handleHeaderItemSection() {
  const sections = $('section');

  sections.map((_, section) => {
    const links = $(`a[name=${section.id}]`);
    const scrollTop = $(this).scrollTop();
    const offsetTop = $(section).offset().top;

    if (
      ((section.id === 'about' && scrollTop >= offsetTop - 1) ||
        (section.id !== 'about' &&
          scrollTop >= offsetTop - window.innerHeight / 4)) &&
      scrollTop <= offsetTop + section.offsetHeight - window.innerHeight / 4
    ) {
      links.map((_, link) => {
        $(link).addClass('menu-item-selected');
      });
    } else {
      links.map((_, link) => {
        $(link).removeClass('menu-item-selected');
      });
    }

    if (scrollTop + $(this).height() / 3 >= offsetTop - 80) {
      const sectionContainer = $(`.${section.id}__container`);

      sectionContainer.addClass('animated fadeInUp');
      if (section.id === 'skills') {
        setSkillsWidth();
      }
    }
  });
}

function handleNavBarCss() {
  const navbar = $('.navbar');

  if ($(this).scrollTop() > 10) {
    navbar.addClass('is-fixed-top');
    navbar.css('backgroundColor', 'white');
    navbar.css('paddingTop', '0px');
    navbar.css('paddingBottom', '0px');
    navbar.css(
      'boxShadow',
      '0 10px 30px rgba(0, 0, 0, 0.19), 0 6px 10px rgba(0, 0, 0, 0.23)'
    );

    // prettier-ignore
    navbar.children().children().find('.navbar-item').map((_, element) => {
        // prettier-ignore
        $(element).children().css('color', '#3d4451');
      });
  } else {
    navbar.removeClass('is-fixed-top');
    navbar.css('backgroundColor', 'transparent');
    navbar.css('paddingTop', '15px');
    navbar.css('paddingBottom', '15px');
    navbar.css('boxShadow', '');

    // prettier-ignore
    navbar.children().children().find('.navbar-item').map((_, element) => {
        // prettier-ignore
        $(element).children().css('color', 'rgba(255, 255, 255, 0.7)');
      });
  }
}

handleNavBarCss();
handleHeaderItemSection();
