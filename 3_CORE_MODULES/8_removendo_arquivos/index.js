const fs = require("fs");

fs.unlink('arquivo.txt', function (err) {

    if (err) {
        console.log(err);
    }
    console.log("arquivo removido!")
});