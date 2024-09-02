document.addEventListener('DOMContentLoaded', function () {
    function hideLoading() {
        const loading = document.querySelector('.loading');
        const main = document.querySelector('.main');

        if (loading) {
            loading.classList.add('d-none');
        }

        if (main) {
            main.classList.remove('d-none');
            main.classList.add('d-flex');
        }
    }

    function updateProgressBar() {
        const progressBar = document.querySelector('.loading-progress');
        let width = 0;

        const interval = setInterval(() => {
            if (width >= 100) {
                clearInterval(interval);
                hideLoading();
            } else {
                width += 1; // Ajuste a velocidade de progresso
                progressBar.style.width = width + '%';
                progressBar.textContent = width + '%'; // Atualiza o texto com a porcentagem
            }
        }, 2); // Ajuste a velocidade do aumento do progresso
    }

    updateProgressBar();
});
