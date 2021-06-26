
document.addEventListener('DOMContentLoaded', () => {

    const themeStylesheet = document.getElementById('theme');
    // const home = document.getElementById('homestyle');
    const themeToggle = document.getElementById('theme-toggle');
    const logo = document.getElementById('logo');
    themeToggle.addEventListener('click', () => {
        // if it's light -> go dark
        if(themeStylesheet.href.includes('global')){
            themeStylesheet.href = '/styles/dark-mode.css';
            // home.href = '/styles/home-dark.css';
            logo.src = "/assets/logo-dark.png";
            themeToggle.innerText = 'Switch to light mode';

        } else {
            // if it's dark -> go light
            themeStylesheet.href = '/styles/global.css';
            // home.href = '/styles/home.css';
            logo.src = "/assets/logo.svg";
            themeToggle.innerText = 'Switch to dark mode';

        }
    })
})