// Dados de Exemplo para o Portfólio
// No seu CMS real, esses dados viriam de um banco de dados
const portfolioData = {
    'sofia-ribeiro': {
        title: '15 Anos Sofia Ribeiro',
        location: 'Iate Clube Aquidabã - Angra dos Reis, RJ',
        images: [
            'caminho/para/sofia-foto-1.jpg',
            'caminho/para/sofia-foto-2.jpg',
            'caminho/para/sofia-foto-3.jpg'
        ]
    },
    'casamento-victor-guilherme': {
        title: 'Casamento Victor e Guilherme',
        location: 'Iate Clube Aquidabã - Angra dos Reis, RJ',
        images: [
            'caminho/para/victor-guilherme-foto-1.jpg',
            'caminho/para/victor-guilherme-foto-2.jpg',
            'caminho/para/victor-guilherme-foto-3.jpg',
            'caminho/para/victor-guilherme-foto-4.jpg'
        ]
    }
    // Adicione os outros eventos aqui...
};

// --- Configuração do Modal ---
const modal = document.getElementById('portfolio-modal');
const closeBtn = document.querySelector('.close-btn');
const openBtns = document.querySelectorAll('.open-modal-btn');
const modalTitle = document.getElementById('modal-title');
const modalLocation = document.getElementById('modal-location');
const modalGallery = document.getElementById('modal-image-gallery');

// 1. Função para Abrir o Modal
function openModal(eventId) {
    const event = portfolioData[eventId];

    if (!event) return; // Se o ID não for encontrado, não faça nada

    // 1.1 Preencher o Modal com os dados do evento
    modalTitle.textContent = event.title;
    modalLocation.textContent = event.location;

    // 1.2 Limpar e Preencher a Galeria de Imagens
    modalGallery.innerHTML = ''; 
    event.images.forEach(imageUrl => {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = event.title + ' - Foto';
        modalGallery.appendChild(img);
    });

    // 1.3 Mostrar o Modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Evita a rolagem do fundo
}

// 2. Função para Fechar o Modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restaura a rolagem do fundo
}

// 3. Adicionar Event Listeners (Ouvintes de Eventos)

// 3.1 Clicar nos botões "Ver Fotos"
openBtns.forEach(button => {
    button.addEventListener('click', function(e) {
        e.stopPropagation(); // Previne que o clique no botão ative outros listeners
        const eventId = this.closest('.portfolio-item').dataset.eventId;
        openModal(eventId);
    });
});

// 3.2 Clicar no 'X' para fechar
closeBtn.addEventListener('click', closeModal);

// 3.3 Clicar fora do modal para fechar
window.addEventListener('click', function(e) {
    if (e.target === modal) {
        closeModal();
    }
});