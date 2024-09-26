let resultado = rank(350, 150);

function rank(vitorias, derrotas) {
    let saldoRanked = vitorias - derrotas;
    return saldoRanked;
}

if (resultado < 10) {
    console.log(`O herói tem saldo de ${resultado} e está no nível de Ferro`);
} else if (resultado >= 10 && resultado <= 20) {
    console.log(`O herói tem saldo de ${resultado} e está no nível de Bronze`);
} else if (resultado >= 21 && resultado <= 50) {
    console.log(`O herói tem saldo de ${resultado} e está no nível de Prata`);
} else if (resultado >= 51 && resultado <= 80) {
    console.log(`O herói tem saldo de ${resultado} e está no nível de Ouro`);
} else if (resultado >= 81 && resultado <= 90) {
    console.log(`O herói tem saldo de ${resultado} e está no nível de Diamante`);
} else if (resultado >= 91 && resultado <= 100) {
    console.log(`O herói tem saldo de ${resultado} e está no nível de Lendário`);
} else if (resultado >= 101) {
    console.log(`O herói tem saldo de ${resultado} e está no nível de Imortal`);
}


