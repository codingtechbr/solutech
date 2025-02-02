// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Função para enviar mensagem ao WhatsApp
function sendToWhatsApp() {
  // Captura os valores do formulário
  const name = document.getElementById('name').value;
  const problem = document.getElementById('problem').value;

  // Número de telefone (substitua pelo número desejado)
  const phoneNumber = '5511998252498';

  // Cria a mensagem que será enviada
  const message = `Olá, meu nome é ${name}. Gostaria de relatar o seguinte problema: ${problem}`;

  // Codifica a mensagem para uso na URL
  const encodedMessage = encodeURIComponent(message);

  // Redireciona para o WhatsApp
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');

  // Exibe um alerta de confirmação
  alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
}

// Animação de entrada das seções
const sections = document.querySelectorAll('section');
const options = {
  threshold: 0.3 // Define o ponto de interseção para ativar a animação
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Adiciona a classe 'animate' com um pequeno atraso
      setTimeout(() => {
        entry.target.classList.add('animate');
      }, 200); // Atraso de 200ms
    } else {
      entry.target.classList.remove('animate');
    }
  });
}, options);

// Observa cada seção
sections.forEach(section => {
  observer.observe(section);
});