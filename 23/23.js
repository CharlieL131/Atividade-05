document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("alturasForm");
    var inputContainer = document.getElementById("inputContainer");
    var resultDiv = document.getElementById("result");
    for (var i = 0; i < 5; i++) {
        var input = document.createElement("input");
        input.type = "number";
        input.step = "0.01";
        input.name = "altura".concat(i + 1);
        input.placeholder = "Altura ".concat(i + 1);
        inputContainer.appendChild(input);
        inputContainer.appendChild(document.createElement("br"));
    }
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var alturas = [];
        for (var i = 0; i < 5; i++) {
            var input = document.querySelector("input[name=\"altura".concat(i + 1, "\"]"));
            if (input && input.value) {
                alturas.push(parseFloat(input.value));
            }
        }
        if (alturas.length === 5) {
            var soma = alturas.reduce(function (acc, altura) { return acc + altura; }, 0);
            var media = soma / 5;
            resultDiv.textContent = "A m\u00E9dia de altura \u00E9: ".concat(media.toFixed(2), " metros");
        }
        else {
            resultDiv.textContent = "Por favor, insira todas as 5 alturas.";
        }
    });
});
