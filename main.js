document.addEventListener('DOMContentLoaded', () => {
    const drawButton = document.getElementById('draw-button');
    const numberSpans = document.querySelectorAll('.number');
    const themeButton = document.getElementById('theme-button');
    const body = document.body;

    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeButton.textContent = 'Light Mode';
    }

    themeButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        themeButton.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });

    drawButton.addEventListener('click', () => {
        const lottoNumbers = generateLottoNumbers();
        displayNumbers(lottoNumbers);
    });

    function generateLottoNumbers() {
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNumber);
        }
        return Array.from(numbers).sort((a, b) => a - b);
    }

    function displayNumbers(numbers) {
        numberSpans.forEach((span, index) => {
            span.textContent = '';
            span.style.transform = 'scale(0)';
            setTimeout(() => {
                span.textContent = numbers[index];
                span.style.transform = 'scale(1)';
            }, (index + 1) * 200);
        });
    }
});
