const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question("Qual a sua linguagem preferida? ", (language) => {
    if (language === "Python") {
        console.log("Essa linguagem é muito boa!")
    } else {
        console.log(`A minha linguagem preferida é : ${language} `);
    }

    readline.close();
});