javascript
/* ===================================================
   TESTIMONIALS - API FETCH & CENTERED CAROUSEL
   =================================================== */

const avatarImages = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80'
];


/**
 * Função principal chamada pelo script.js
 */
export async function initTestimonials() {
    const cardsContainer = document.getElementById('testimonials-cards');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    // Trava de segurança
    if (!cardsContainer) {
        return;
    }

    // Busca os dados na API e renderiza os cards
    await loadTestimonials(cardsContainer);

    // Configura os botões de navegação
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            scrollCarousel(cardsContainer, 1);
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            scrollCarousel(cardsContainer, -1);
        });
    }
}


/**
 * Move o carrossel horizontalmente
 */
function scrollCarousel(cardsContainer, direction) {
    const card = cardsContainer.querySelector('.testimonial-card');

    if (!card) {
        return;
    }

    const cardWidth = card.offsetWidth;
    const gap = 24;

    cardsContainer.scrollBy({
        left: direction * (cardWidth + gap),
        behavior: 'smooth'
    });
}


/**
 * Busca os depoimentos na API
 */
async function loadTestimonials(cardsContainer) {
    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/users'
        );

        if (!response.ok) {
            throw new Error('Erro ao carregar os dados');
        }

        const users = await response.json();
        const firstFiveUsers = users.slice(0, 5);

        cardsContainer.innerHTML = '';

        firstFiveUsers.forEach((user, index) => {
            const cardHTML = createCardHTML(user, index);

            cardsContainer.insertAdjacentHTML(
                'beforeend',
                cardHTML
            );
        });

        // Inicializa o carrossel após renderizar os cards
        initCarouselFocus(cardsContainer);

    } catch (error) {
        console.error(
            'Erro na seção de depoimentos:',
            error
        );
    }
}


/**
 * Cria o HTML de cada card
 */
function createCardHTML(user, index) {
    const avatarUrl =
        avatarImages[index] ||
        `https://ui-avatars.com/api/?name=${encodeURIComponent(
            user.name
        )}`;

    return `
        <article class="testimonial-card">
            <div class="card-company">
                <span class="company-name">
                    ${user.company.name}
                </span>
            </div>

            <p class="card-text">
                "${user.company.catchPhrase}. ${user.company.bs}."
            </p>

            <div class="card-author">
                <img
                    src="${avatarUrl}"
                    alt="Foto de ${user.name}"
                    class="author-avatar"
                    loading="lazy"
                />

                <div class="author-info">
                    <h4 class="author-name">
                        ${user.name}
                    </h4>

                    <span class="author-role">
                        Co-founder / ${user.address.city}
                    </span>
                </div>
            </div>
        </article>
    `;
}


/**
 * Atualiza o card que está mais próximo do centro
 */
function updateActiveCard(cardsContainer) {
    const cards =
        cardsContainer.querySelectorAll('.testimonial-card');

    if (!cards.length) {
        return;
    }

    const containerRect =
        cardsContainer.getBoundingClientRect();

    const containerCenter =
        containerRect.left + containerRect.width / 2;

    let closestCard = null;
    let minDistance = Infinity;

    cards.forEach((card) => {
        const cardRect = card.getBoundingClientRect();

        const cardCenter =
            cardRect.left + cardRect.width / 2;

        const distance =
            Math.abs(containerCenter - cardCenter);

        if (distance < minDistance) {
            minDistance = distance;
            closestCard = card;
        }
    });

    cards.forEach((card) => {
        card.classList.remove('active');
    });

    if (closestCard) {
        closestCard.classList.add('active');
    }
}


/**
 * Inicializa a posição central do carrossel
 * e acompanha o scroll
 */
function initCarouselFocus(cardsContainer) {
    const cards =
        cardsContainer.querySelectorAll('.testimonial-card');

    if (!cards.length) {
        return;
    }

    // Centraliza o 3º card
    if (cards.length >= 3) {
        const targetCard = cards[2];

        const containerWidth =
            cardsContainer.offsetWidth;

        const cardOffsetLeft =
            targetCard.offsetLeft;

        const cardWidth =
            targetCard.offsetWidth;

        cardsContainer.scrollLeft =
            cardOffsetLeft -
            (containerWidth / 2) +
            (cardWidth / 2);
    }

    updateActiveCard(cardsContainer);

    // Atualiza o card ativo durante o scroll
    cardsContainer.addEventListener(
        'scroll',
        () => updateActiveCard(cardsContainer),
        { passive: true }
    );
}

