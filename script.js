const VARIANT = 12; 


const info = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
    vendor: navigator.vendor,
    cookieEnabled: navigator.cookieEnabled,
    screen: `${screen.width}x${screen.height}`,
};
for (const [key, value] of Object.entries(info)) {
    localStorage.setItem(key, value);
}
const storageBox = document.getElementById('storageInfo');
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    storageBox.innerHTML += `<p><b>${key}:</b> ${localStorage.getItem(key)}</p>`;
}

async function loadReviews() {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const comments = await res.json();
        const list = document.getElementById('reviewsList');
        comments.forEach(c => {
            list.innerHTML += `
                <div class="review">
                    <h4>${c.name}</h4>
                    <small>${c.email}</small>
                    <p>${c.body}</p>
                </div>`;
        });
    } catch (err) {
        console.error('Помилка завантаження відгуків:', err);
    }
}
loadReviews();

const modal = document.getElementById('modal');
setTimeout(() => modal.classList.remove('hidden'), 3000);
document.getElementById('closeModal')
    .addEventListener('click', () => modal.classList.add('hidden'));

const hour = new Date().getHours();
const isDay = hour >= 7 && hour < 21;
document.body.classList.toggle('dark-mode', !isDay);

document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});