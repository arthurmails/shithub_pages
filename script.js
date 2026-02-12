const header = document.querySelector('.site-header');
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

// Shrink header when scrolling
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});

// Toggle hamburger menu
hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamburger.classList.toggle('active');
});

const el = document.getElementById('fade-text');
const duration = 60000; // 10 seconds
const start = performance.now();

function tick(now) {
    const t = Math.min(1, (now - start) / duration); // 0 → 1
    el.style.setProperty('--fade-progress', t);
    if (t < 1) requestAnimationFrame(tick);
}

requestAnimationFrame(tick);


// Handle code
function submitCode() {
    const code = document.getElementById("code").value;
    window.location.href =
        "https://onlyarthur.com/access?code=" + encodeURIComponent(code);
}

