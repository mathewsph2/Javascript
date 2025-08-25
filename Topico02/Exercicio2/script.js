// Exercício 2 do tópico 02


//Verifique se a sua idade é maior do que a de algum parente,
// Dependendo do resultado coloque no console 'É maior' , 'É igual'


var idadeMatheus = 35;

var idadeKellen = 33;

if (idadeMatheus > idadeKellen){
console.log("Idade de Matheus é Maior")
}
else if (idadeMatheus == idadeKellen){
    console.log("Idades iguais")
}
else {
    console.log("Idade de Kellen é Maior")
}


// Qual valor é retornado na seguinte expressão:
var expressao = (5-2) && (5-' ') && (5-2);

console.log(expressao);
// A expressão retorna 3 porque todos os operandos são true
// e o operador && retorna o último valor quando todos são verdadeiros.


// Verifique se as variáveis são True ou False


var nome = 'João';
console.log(Boolean(nome));
// nome é uma string não vazia ('João').
// Strings não vazias são truthy.
// Saída: true


var idade = 28;
console.log(Boolean(idade));
// idade é um número diferente de zero (28).
// Números diferentes de zero são truthy.
// Saída: true


var possuiDoutorado = false;
console.log(Boolean(possuiDoutorado));
// possuiDoutorado é o valor booleano false.
// O próprio false é falsy.
// Saída: false

var empregoFuturo;
console.log(Boolean(empregoFuturo));
// empregoFuturo foi declarada, mas não foi atribuído nenhum valor.
// Variáveis não inicializadas têm valor undefined.
// undefined é falsy.
// Saída: false



var dinheiroNaConta = 0;
console.log(Boolean(dinheiroNaConta));
// dinheiroNaConta é o número 0.
// O número 0 é falsy.
// Saída: false


//Compare o total de habitantes do Brasil com China (valor em mi)
var brasil = 207; var china = 1340;

// Verificando se a China tem mais habitantes que o Brasil
console.log(china > brasil);  // true

// Verificando se o Brasil tem mais habitantes que a China
console.log(brasil > china);  // false

// Verificando se têm a mesma quantidade (igualdade)
console.log(brasil === china);  // false

// Diferença absoluta entre os dois países
var diferenca = china - brasil;
console.log(diferenca);  // 1133 milhões (1,133 bilhão)

// A China tem aproximadamente quantas vezes a população do Brasil?
var vezes = china / brasil;
console.log(vezes);  // ≈6.47 vezes maior



// O que irá aparecer no console:
if(('Gato' === 'gato') && (5>2)){
    console.log('Verdadeiro');
}
else {
    console.log('Falso');
}


// O que irá aparecer no console:
if(('Gato' === 'gato') || (5>2)){
    // Retorna true se pelo menos uma das expressões for verdadeira

    console.log('Gato' && 'Cão');
    // Retorna o último valor truthy se todos forem truthy,
    // Portanto, retorna o último valor: 'Cão'
}
else{
    console.log('Falso');
}
