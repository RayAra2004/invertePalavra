const palavra = "arroz";
let tamanho = palavra.length;
let resposta = '';

for(let i = 1; i < tamanho + 1; i++){
    resposta += palavra[tamanho - i];
}

console.log(resposta);