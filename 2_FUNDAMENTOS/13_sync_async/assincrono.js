const fs = require("fs");

console.log("Inicia");

fs.writeFile("arquivo.txt", "oi", function (err) {
    setTimeout(function () {
        console.log("Arquivo Criado");
    }, 2000)
});

console.log("Fim");