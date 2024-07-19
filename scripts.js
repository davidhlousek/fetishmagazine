const menuBar = document.getElementById('menuBar');
const customCursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
    customCursor.style.left = `${e.clientX}px`;
    customCursor.style.top = `${e.clientY}px`;
});

function toggleMenuBar() {
    menuBar.classList.toggle('visible');
}

function navigateTo(section) {
    console.log(`Navigating to ${section}`);
    if (section.toLowerCase() === 'concept') {
        window.location.href = 'concept.html';
    } else if (section.toLowerCase() === 'articles') {
        window.location.href = 'articles.html';
    } else if (section.toLowerCase() === 'podcast') {
        window.location.href = 'podcast.html';
    }
    toggleMenuBar();
}

function retrieveUserText() {
    const storedUserText = localStorage.getItem('userText');
    if (storedUserText) {
        const displayedUserText = document.getElementById('displayedUserText');
        displayedUserText.textContent = `Fetish is: ${storedUserText}`;
    }
}

retrieveUserText();

function updateUserText() {
    const userText = document.getElementById('userText').value;
    const displayedUserText = document.getElementById('displayedUserText');
    displayedUserText.textContent = `Fetish is: ${userText}`;
    localStorage.setItem('userText', userText);
    document.getElementById('userText').value = '';
}
