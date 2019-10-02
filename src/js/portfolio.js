function handleItemHover() {
  const items = $('.item-container').toArray();

  items.map(item => {
    const iconsContainer = $(item).find('.icons-container');
    const icons = iconsContainer.find('ion-icon').toArray();

    $(item).hover(
      () => {
        const itemInfoContainer = $(item).find('div:first-child');

        if (isMobile()) $(item).css('cursor', 'pointer');
        $(itemInfoContainer).css('-webkit-transform', 'translate(0, -55px)');
        $(itemInfoContainer).css('transform', 'translate(0, -55px)');
        $(itemInfoContainer).css('-moz-transform', 'translate(0, -55px)');
        $(iconsContainer).css('pointer-events', 'auto');

        icons.map((icon, index) => {
          $(icon).css(
            '-webkit-transition',
            `all 0.${(index + 1) * 2}s ease-out`
          );
          $(icon).css('transition', `all 0.${(index + 1) * 2}s ease-out`);
          $(icon).css('-moz-transition', `all 0.${(index + 1) * 2}s ease-out`);
          $(icon).css('transform', 'translate(0, 0px)');
          $(icon).css('opacity', 1);
        });
      },
      () => {
        const itemInfoContainer = $(item).find('div:first-child');

        if (isMobile()) $(item).css('cursor', 'none');
        $(itemInfoContainer).css('-webkit-transform', 'translate(0, 0px)');
        $(itemInfoContainer).css('transform', 'translate(0, 0px)');
        $(itemInfoContainer).css('-moz-transform', 'translate(0, 0px)');
        $(iconsContainer).css('pointer-events', 'none');

        icons.map(icon => {
          $(icon).css('-webkit-transition', 'all 0s ease-out');
          $(icon).css('transition', 'all 0s ease-out');
          $(icon).css('-moz-transition', 'all 0s ease-out');
          $(icon).css('opacity', 0);
          $(icon).css('transform', 'translate(0, 100px)');
        });
      }
    );
  });
}

let portfolioItemIndex = 0;
const portfolioItems = [
  `<div class="column is-6 animated slideInLeft">
    <div
      class="item-container"
      style="background-image: url(https://res.cloudinary.com/dxnck6njo/image/upload/v1570325546/personal-landing/matcha-screen.png);"
    >
      <div>
        <h1>Matcha</h1>
        <span name="matchaSubtitle">Dating web and mobile application (Work in progress 🚧)</span>
        <div class="icons-container">
          <ion-icon
            onclick="handleModal('Matcha', 'matchaSubtitle', 'matchaDescription')"
            name="search"
          ></ion-icon>
          <a target="_blank" href="https://matcha.app.mi-mazouz.com">
            <ion-icon name="link"></ion-icon>
          </a>
          <a target="_blank" href="">
            <ion-icon name="phone-portrait"></ion-icon>
          </a>
        </div>
      </div>
    </div>
  </div>`
];

function handleShowMoreOrLessPortfolioItems() {
  const itemsContainer = $('.portfolio__container').find('.columns');
  const items = $(itemsContainer).find('.column');

  if (portfolioItemIndex >= portfolioItems.length) {
    const addIcon = $('.portfolio__container').find("ion-icon[name='remove']");

    const newItems = [...items];
    newItems.splice(items.length - portfolioItemIndex);
    itemsContainer.html(newItems);

    portfolioItemIndex = 0;
    addIcon.attr('name', 'add');
  } else {
    const addIcon = $('.portfolio__container').find("ion-icon[name='add']");

    portfolioItems.slice(portfolioItemIndex).map(portfolioItem => {
      itemsContainer.append(portfolioItem);
      portfolioItemIndex += 1;
    });
    if (portfolioItemIndex >= portfolioItems.length)
      addIcon.attr('name', 'remove');
  }
  handleItemHover();
}

handleItemHover();
