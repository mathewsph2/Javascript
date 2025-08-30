// Crie uma função que recebe um número como parametro para imprimir no console
// a letra da música com contagem de ovos da música "A Galinha do Vizinho".

function imprimir(num) {

    var ovo1 = 0;
    var ovo2 = 1;
    var ovo3 = 2;
    var ovo4 = 3;
    var ovo5 = 4;

    if (ovo1 >= num) {
        return "";
    }

    imprimir(num - 5);

    console.log(`A galinha do vizinho bota ovo amarelinho`);
    ovo1 = ovo1 + num;
    ovo2 = ovo2 + num;
    console.log(`Bota ${ovo1}, bota ${ovo2}`);

    console.log(`A galinha do vizinho bota ovo amarelinho`);
    ovo3 = ovo3 + num;
    ovo4 = ovo4 + num;
    console.log(`Bota ${ovo3}, bota ${ovo4}`);

    console.log(`A galinha do vizinho bota ovo amarelinho`);
    ovo5 = ovo5 + num;
    console.log(`Bota ${ovo5}, bota mil`);

}

// Ao final chame a função para imprimir a letra completa com a contagem de 100 ovos.

imprimir(96);