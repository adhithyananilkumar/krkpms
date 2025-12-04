document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');

    // Wait for 3 seconds then hide the loader
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 3000);
});
