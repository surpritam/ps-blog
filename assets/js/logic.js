function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    // Optionally save theme preference to localStorage
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
}

let existingTheme = localStorage.getItem('theme')
if (existingTheme == 'dark'){
    document.body.classList.toggle('dark-mode')
};

const toggleButton = document.createElement('button')
toggleButton.setAttribute('id', "toggleTheme")
toggleButton.innerHTML="Toggle Light/Dark Mode"
const headerEle = document.getElementById('header-container')
headerEle.appendChild(toggleButton);

document.getElementById('toggleTheme').addEventListener('click', toggleTheme);
