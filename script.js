document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('nav ul');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', String(isOpen));
        });
    }

    const featuredSection = document.querySelector('.featured-pets');
    const petCards = Array.from(document.querySelectorAll('.pet-card'));

    if (!featuredSection || petCards.length === 0) {
        return;
    }

    const pets = petCards.map((card) => {
        const nameElement = card.querySelector('h3');
        const descElement = card.querySelector('p');
        return {
            card,
            name: nameElement ? nameElement.textContent.trim() : 'Pet',
            desc: descElement ? descElement.textContent.trim() : '',
        };
    });

    const petOfTheDay = pets[Math.floor(Math.random() * pets.length)];
    const highlight = document.createElement('div');
    highlight.className = 'pet-of-day';
    highlight.innerHTML = `
        <h3>Pet of the Day: ${petOfTheDay.name}</h3>
        <p>${petOfTheDay.desc}</p>
        <button type="button" class="btn-secondary">Show another pet</button>
    `;

    featuredSection.insertBefore(highlight, featuredSection.querySelector('p'));

    const swapButton = highlight.querySelector('button');
    swapButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * pets.length);
        const nextPet = pets[randomIndex];
        highlight.querySelector('h3').textContent = `Pet of the Day: ${nextPet.name}`;
        highlight.querySelector('p').textContent = nextPet.desc;
    });

    pets.forEach((pet) => {
        const cardInfo = pet.card.querySelector('.pet-info');
        const interestButton = document.createElement('button');
        interestButton.type = 'button';
        interestButton.className = 'btn-secondary interest-action';
        interestButton.textContent = 'Save interest';

        const note = document.createElement('div');
        note.className = 'interest-note';
        note.textContent = '';

        cardInfo.appendChild(interestButton);
        cardInfo.appendChild(note);

        interestButton.addEventListener('click', () => {
            note.textContent = `Great! ${pet.name} has been added to your saved favorites.`;
            window.localStorage.setItem(`paws-heart-interest-${pet.name}`, 'saved');
        });
    });
});
