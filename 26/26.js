document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("inversoForm");
    var resultDiv = document.getElementById("result");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var input = document.getElementById("numero");
        if (input && input.value) {
            var numero = parseInt(input.value, 10);
            var inverso = numero.toString().split('').reverse().join('');
            resultDiv.textContent = "O n\u00FAmero invertido \u00E9: ".concat(inverso);
        }
        else {
            resultDiv.textContent = "Por favor, insira um n\u00FAmero inteiro.";
        }
    });
});
