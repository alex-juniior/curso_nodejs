const chalk = require("chalk");

const nota = 3;

if (nota >= 7) {
    console.log(chalk.green("Você foi aprovado!"));
} else if (nota >= 5) {
    console.log(chalk.yellow("Você está de recuperação!"));
} else {
    console.log(chalk.bgRed.black("Você foi reprovado!"));
}