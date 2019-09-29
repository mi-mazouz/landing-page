function setSkillsWidth() {
  const skillsBar = $('.skill-container')
    .find(`[data-width]`)
    .toArray();

  skillsBar.map(skillBar => {
    const width = $(skillBar).attr('data-width');

    $(skillBar).css('width', width);
  });
}
