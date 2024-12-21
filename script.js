// Minimal JavaScript for interactivity

// Toggle Dark Mode (if you'd like to add a toggle button later)
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.createElement('button');
    darkModeToggle.innerText = 'Toggle Dark Mode';
    darkModeToggle.style.position = 'fixed';
    darkModeToggle.style.bottom = '20px';
    darkModeToggle.style.right = '20px';
    darkModeToggle.style.padding = '10px';
    darkModeToggle.style.backgroundColor = '#1e1e1e';
    darkModeToggle.style.color = '#e0e0e0';
    darkModeToggle.style.border = 'none';
    darkModeToggle.style.borderRadius = '5px';
    darkModeToggle.style.cursor = 'pointer';

    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener('click', () => {
        if (document.body.style.backgroundColor === 'white') {
            document.body.style.backgroundColor = '#121212';
            document.body.style.color = '#e0e0e0';
        } else {
            document.body.style.backgroundColor = 'white';
            document.body.style.color = '#121212';
        }
    });
});
