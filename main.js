document.addEventListener('DOMContentLoaded', () => {
    const drawButton = document.getElementById('draw-button');
    const numberSpans = document.querySelectorAll('.number');

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
        return Array.from(numbers);
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
