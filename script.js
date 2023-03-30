function toggleActive(self) {
  let ul = self.getElementsByTagName('ul')[0];
  if (ul.classList.contains('active')) {
    ul.classList.remove('active');
  } else {
    ul.classList.add('active');
  }
}

function setTeam(self) {
  let team = document.getElementById('current-team');
  let node = self.parentNode.firstChild;
  while (node && node.nodeType === Node.ELEMENT_NODE && node !== this) {
    node.classList.remove('has-text-weight-semibold');
    node = node.nextElementSibling || node.nextSibling;
  }
  self.classList.add('has-text-weight-semibold');
  team.innerHTML = self.innerHTML;
}
