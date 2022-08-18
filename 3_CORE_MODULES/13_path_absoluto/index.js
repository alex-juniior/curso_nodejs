const path = require("path");

//path asbosoluto
console.log(path.resolve('teste.txt'));

// formar path 

const midFolder = "relatorio";
const fileName = "alex.txt"

const finalPath = path.join("/", 'arquivos', midFolder, fileName);

console.log(finalPath);