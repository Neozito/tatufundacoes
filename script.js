const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
if (menuToggle && menu) {
  menuToggle.addEventListener('click', () => menu.classList.toggle('open'));
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => menu.classList.remove('open')));
}

const form = document.getElementById('whatsappForm');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const nome = data.get('nome');
    const telefone = data.get('telefone');
    const cidade = data.get('cidade');
    const servico = data.get('servico');
    const mensagem = data.get('mensagem');

    const texto = `Olá, meu nome é ${nome}.\nTelefone: ${telefone}.\nCidade/Obra: ${cidade}.\nServiço: ${servico}.\nMensagem: ${mensagem}`;
    const url = `https://wa.me/5545999261308?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank', 'noopener');
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
