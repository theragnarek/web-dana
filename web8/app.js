import { convert } from './currencyConverter.js';

document.getElementById("convert-btn").addEventListener("click", () => {
    const amount = parseFloat(document.getElementById("amount").value);
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;

    if (isNaN(amount) || amount <= 0) {
        document.getElementById("result").textContent = "Введите корректную сумму";
        return;
    }

    const result = convert(amount, from, to);
    document.getElementById("result").textContent = `Результат: ${result} ${to}`;
});
