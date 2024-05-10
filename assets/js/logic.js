function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
    if (body.classList.contains('dark-mode')){
        this.textContent="🌙";
    } else {
        this.textContent="☀️";
    }
}

// check for existing preference set
let existingTheme = localStorage.getItem('theme')
if (existingTheme == 'dark'){
    document.body.classList.toggle('dark-mode')
};

const toggleButton = document.createElement('button')
toggleButton.setAttribute('id', "toggleTheme")

const navEle = document.getElementById('nav-container')
navEle.appendChild(toggleButton);

document.getElementById('toggleTheme').addEventListener('click', toggleTheme);

window.onload = function(){
    if (document.body.classList.contains('dark-mode')){
        toggleButton.textContent="🌙";
    } else {
        toggleButton.textContent="☀️";
    }
}
