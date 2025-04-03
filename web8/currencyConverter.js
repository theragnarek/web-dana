const exchangeRates = {};

export function setExchangeRate(from, to, rate) {
    if (!exchangeRates[from]) {
        exchangeRates[from] = {};
    }
    exchangeRates[from][to] = rate;
}

export function convert(amount, from, to) {
    if (!exchangeRates[from] || !exchangeRates[from][to]) {
        return "Курс не найден";
    }
    return (amount * exchangeRates[from][to]).toFixed(2);
}

export function getExchangeRates() {
    return exchangeRates;
}

// Установим несколько курсов валют по умолчанию
setExchangeRate("USD", "EUR", 0.85);
setExchangeRate("EUR", "USD", 1.18);
setExchangeRate("USD", "RUB", 75);
setExchangeRate("RUB", "USD", 0.013);
