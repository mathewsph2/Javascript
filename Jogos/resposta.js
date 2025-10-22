function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* 
* QUESTÃO 1 (Criação de Arrays/Objetos) (0.5 pontos) :
* Crie um array chamado que armazene os caminhos das imagens dos dados.
* O array deve ter 6 elementos, onde o índice 0 corresponde ao dado 1, índice 1 ao 
* dado 2, e assim por diante (exemplo: índice 0 -> './imgs/1.svg').
*/

const dadosImgs = [
 './imgs/1.svg', 
 './imgs/2.svg', 
 './imgs/3.svg', 
 './imgs/4.svg', 
 './imgs/5.svg', 
 './imgs/6.svg'
];

/* 
* QUESTÃO 2 (DOM - Manipulação de Eventos) (0.5 pontos):
* Adicione um evento de clique ao botão para rolar os dados. 
* Quando o botão for clicado, a função deve executar todo o código necessário para o jogo funcionar.
*/

const btnRolar = document.getElementById('roll-button');
const img1 = document.querySelector("#die1 > img");
const img2 = document.querySelector("#die2 > img");
const result1 = document.getElementById("player1-result");
const result2 = document.getElementById("player2-result");
const nomeJog1 = document.getElementById("player1-name");
const nomeJog2 = document.getElementById("player2-name");
const msgVitoria = document.getElementById("winner-announcement");
const listaVitoria = document.getElementById("winners-list");

btnRolar.addEventListener('click',()=>{
  const dado1 = gerarNumeroAleatorio(0,5);
  const dado2 = gerarNumeroAleatorio(0,5);
  img1.setAttribute('src',dadosImgs[dado1]);
  img2.setAttribute('src',dadosImgs[dado2]);
  result1.innerText = dado1+1;
  result2.innerText = dado2+1;
  let nomeVencedor;

  if (dado1 > dado2){
      nomeVencedor = nomeJog1.value || 'Jogador 1';
      msgVitoria.innerText = `${nomeVencedor} venceu!`;
      const vencedor1 = document.createElement('li');
      vencedor1.innerText = nomeVencedor;
      listaVitoria.appendChild(vencedor1);
  }else if(dado2 > dado1){
      nomeVencedor = nomeJog2.value || 'Jogador 2';
      msgVitoria.innerText = `${nomeVencedor} venceu!`;
      const vencedor2 = document.createElement('li');
      vencedor2.innerText = nomeVencedor;
      listaVitoria.appendChild(vencedor2);
  }else{
      msgVitoria.innerText = `Empate!`;
  }
});

/* 
* QUESTÃO 3 (Utilização de Funções e Manipulação do DOM) (1.5 pontos):
* Use a função fornecida (gerarNumeroAleatorio) para sortear um número de 1 a 6 para cada jogador. 
* A função gerarNumeroAleatorio espera como parâmetros os valores mínimo e máximo do sorteio. 
* Em seguida, atualize as imagens dos dados usando o array criado anteriormente 
* e os seletores da imagem. 
* Atualize também os elementos com ids 'player1-result' e 'player2-result' com os valores sorteados.
*/
  
/* 
* QUESTÃO 4 (Manipulação de Formulários e Criação de Elementos) (1.5 pontos):
* Obtenha os valores dos inputs do formulário. Caso estejam vazios, use valores padrão (Jogador 1 e Jogador 2). 
* Compare os resultados dos dados e exiba a mensagem apropriada no elemento 'winner-announcement'. Informando quem venceu.
* Se houver um vencedor, crie um elemento <li> com o nome do vencedor e adicione-o à lista 'winners-list'.
* Se houver empate, exiba "Empate!" na mensagem e não adicione ninguem à lista.
*/
