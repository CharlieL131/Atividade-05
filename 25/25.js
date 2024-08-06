document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("digitosParesForm");
    var resultDiv = document.getElementById("result");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var input = document.getElementById("numero");
        if (input && input.value) {
            var numero = parseInt(input.value, 10);
            var soma = numero.toString().split('').reduce(function (acc, digit) {
                var numDigit = parseInt(digit, 10);
                return numDigit % 2 === 0 ? acc + numDigit : acc;
            }, 0);
            resultDiv.textContent = "A soma dos d\u00EDgitos pares \u00E9: ".concat(soma);
        }
        else {
            resultDiv.textContent = "Por favor, insira um n\u00FAmero inteiro.";
        }
    });
});
