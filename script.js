// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav-inner nav');

navToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Certificate modal
const certBtn = document.getElementById('certBtn');
const certModal = document.getElementById('certModal');
const certClose = document.getElementById('certClose');
const certClose2 = document.getElementById('certClose2');

function openModal(){
  certModal.classList.add('open');
}
function closeModal(){
  certModal.classList.remove('open');
}

certBtn.addEventListener('click', openModal);
certClose.addEventListener('click', closeModal);
certClose2.addEventListener('click', closeModal);
certModal.addEventListener('click', (e) => {
  if(e.target === certModal) closeModal();
});
document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape') closeModal();
});
