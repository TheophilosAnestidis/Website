document.getElementById("homeBtn").addEventListener("click", function () {
    window.location.href = "index.html";
});

document.getElementById("productsBtn").addEventListener("click", function () {
    window.location.href = "products.html";
});

document.getElementById("contactBtn").addEventListener("click", function () {
    window.location.href = "contact.html";
});

document.getElementById("aboutBtn").addEventListener("click", function () {
    window.location.href = "about.html";
});

document.getElementById("loginBtn").addEventListener("click", function () {
    window.location.href = "login.html";
});

document.getElementById('en-btn').addEventListener('click', function () {
    changeLanguage('en');
});

document.getElementById('el-btn').addEventListener('click', function () {
    changeLanguage('el');
});

function changeLanguage(lang) {
    if (lang === 'en') {
        document.getElementById('homeBtn').textContent = 'Home';
        document.getElementById('productsBtn').textContent = 'Products';
        document.getElementById('contactBtn').textContent = 'Contact';
        document.getElementById('aboutBtn').textContent = 'About Us';
    } else if (lang === 'el') {
        document.getElementById('homeBtn').textContent = 'Αρχική';
        document.getElementById('productsBtn').textContent = 'Προϊόντα';
        document.getElementById('contactBtn').textContent = 'Επικοινωνία';
        document.getElementById('aboutBtn').textContent = 'Σχετικά με εμάς';
    }
    updateActiveLink();
}

function updateActiveLink() {
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.classList.remove('active');
        if (window.location.hash === link.getAttribute('href')) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('hashchange', updateActiveLink);
window.addEventListener('load', updateActiveLink);