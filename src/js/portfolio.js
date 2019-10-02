function handleItemHover() {
  const items = $('.item-container').toArray();

  items.map(item => {
    const iconsContainer = $(item).find('.icons-container');
    const icons = iconsContainer.find('ion-icon').toArray();

    $(item).hover(
      () => {
        const itemInfoContainer = $(item).find('div:first-child');

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

handleItemHover();
