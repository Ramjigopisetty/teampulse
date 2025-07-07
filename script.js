function display(sectionId) {
  var sections = document.getElementsByClassName('section');
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.display = 'none';
  }
  document.getElementById(sectionId).style.display = 'block';
}

window.onload = function () {
  display('section1');
};
