document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("numerosForm");
    var inputContainer = document.getElementById("inputContainer");
    var resultDiv = document.getElementById("result");
    for (var i = 0; i < 10; i++) {
        var input = document.createElement("input");
        input.type = "number";
        input.name = "numero".concat(i + 1);
        input.placeholder = "N\u00FAmero ".concat(i + 1);
        inputContainer.appendChild(input);
        inputContainer.appendChild(document.createElement("br"));
    }
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var numeros = [];
        for (var i = 0; i < 10; i++) {
            var input = document.querySelector("input[name=\"numero".concat(i + 1, "\"]"));
            if (input && input.value) {
                numeros.push(parseFloat(input.value));
            }
        }
        if (numeros.length === 10) {
            var maior = Math.max.apply(Math, numeros);
            var menor = Math.min.apply(Math, numeros);
            resultDiv.textContent = "Maior valor: ".concat(maior, ", Menor valor: ").concat(menor);
        }
        else {
            resultDiv.textContent = "Por favor, insira todos os 10 n\u00FAmeros.";
        }
    });
});
