// Uppgift 1
const modal = document.getElementById('accessibleModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

function openModal() {
  modal.style.display = 'block';
  // modal.setAttribute('aria-hidden', 'true');
  modal.setAttribute('aria-modal', 'true');
  closeModalBtn.focus();
}

function closeModal() {
  modal.style.display = 'none';
  // modal.setAttribute('aria-hidden', 'false');
  modal.setAttribute('aria-modal', 'false');
  openModalBtn.focus();
}

modal.addEventListener('keydown', (e) => {
  const key = e.key;
  if (key === 'Escape') {
    modal.style.display = 'none';
  }
});

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

// Uppgift 2
const dialog = document.getElementById('accessibleDialog');
const closeDialogBtn = document.getElementById('closeDialogBtn');
const openDialogBtn = document.getElementById('openDialogBtn');

// Öppnar dialogen med fokus på stäng-knappen
openDialogBtn.addEventListener('click', () => dialog.showModal());
// Stänger Dialogen med fokus på öppnar-knappen
closeDialogBtn.addEventListener('click', () => dialog.close());

//Ser till att man kan stänga med esc-knappen
dialog.addEventListener('keydown', (e) => {
  const key = e.key;
  if (key === 'Escape') {
    dialog.close();
    // openDialogBtn.focus();
  }
});

// Uppgift 3
const menuButton = document.getElementById('menuButton');
const menuContent = document.getElementById('menuContent');
const closeMenu = document.getElementById('close-menu');

menuButton.addEventListener('click', () => {
  const openMenu = menuContent.classList.toggle('open');

  menuButton.setAttribute('aria-expanded', openMenu);
  menuContent.setAttribute('aria-hidden', !openMenu);

  if (openMenu) {
    menuContent.querySelector('a').focus();
  }
});

closeMenu.addEventListener('click', () => {
  menuContent.classList.remove('open');

  menuButton.setAttribute('aria-expanded', 'false');
  menuContent.setAttribute('aria-hidden', 'true');

  menuButton.focus();
});
