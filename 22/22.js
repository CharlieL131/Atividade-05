document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("divisoresForm");
    var resultDiv = document.getElementById("result");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var input = document.getElementById("numero");
        if (input && input.value) {
            var numero = parseInt(input.value, 10);
            var divisores = [];
            for (var i = 1; i <= numero; i++) {
                if (numero % i === 0) {
                    divisores.push(i);
                }
            }
            resultDiv.textContent = "Divisores de ".concat(numero, ": ").concat(divisores.join(', '));
        }
        else {
            resultDiv.textContent = "Por favor, insira um n\u00FAmero inteiro.";
        }
    });
});
