// Função para incomodar!!!
function incomodar (numero){
    if (numero <= 0)
    {
        return "";
    }
    return " incomodam" + incomodar(numero -1);
}


// função recursiva em ordem crescente:
function elefantes(num){
    if (num <= 0)
    {
        return;
    }
    elefantes(num -1);

    if (num % 2 == 0){
        console.log(`${num} elefantes  ${incomodar(num)}  muito mais`);
    }

    else
    {
        console.log(`${num} elefantes muita gente`);
    }
}


// Função recursiva em ordem decrescente:
function setnafele(num){
    if (num <= 0){
        return "";
    }

    if (num % 2 == 0)
    {
         console.log(`${num} elefantes muita gente`);
    }
    else
    {
         console.log(`${num} elefantes  ${incomodar(num)}  muito menos`);
    }
    setnafele(num -1);
}


elefantes(10);

setnafele(10);