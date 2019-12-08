function handleEducationItemsAnimation() {
  const itemsContainer = $('.education__container .timeline_container .column').children('div');
  const scrollTop = $(this).scrollTop();

  itemsContainer.map((index, item) => {
    const offsetTop = $(item).offset().top;

    if (scrollTop >= offsetTop - window.innerHeight / 1.5 &&
      scrollTop <= offsetTop + item.offsetHeight - window.innerHeight / 1.5
    ) {
      if (index % 2 === 0) $(item).addClass('animated fadeInLeft');
      else $(item).addClass('animated fadeInRight');
    }
  })
}
