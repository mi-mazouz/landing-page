function setAge() {
  $('#age').text(
    Math.floor((new Date() - new Date('June 8, 1994').getTime()) / 3.15576e10)
  );
}

setAge();
