const btnSim = document.getElementById("sim");
const btnNao = document.getElementById("nao");
const mensagem = document.getElementById("mensagem");

// Exibe a mensagem quando o usuário clica em "Sim"
btnSim.addEventListener("click", () => {
  mensagem.style.display = "block";
  mensagem.textContent = "Você aceitou!";
});

// Faz o botão "Não" se mover aleatoriamente pela tela quando o mouse passa sobre ele
btnNao.addEventListener("mouseover", () => {
  moveButton();
});

// Função que faz o botão "Não" se mover aleatoriamente pela tela
function moveButton() {
  // Calcula as novas posições aleatórias dentro da tela, sem ultrapassar os limites
  const largura = window.innerWidth - btnNao.offsetWidth;  // Largura máxima onde o botão pode aparecer
  const altura = window.innerHeight - btnNao.offsetHeight; // Altura máxima onde o botão pode aparecer
  
  const aleatorioX = Math.random() * largura;  // Gera uma posição aleatória no eixo X
  const aleatorioY = Math.random() * altura;  // Gera uma posição aleatória no eixo Y

  // Move o botão para a nova posição aleatória dentro da área visível
  btnNao.style.position = "absolute";
  btnNao.style.left = `${aleatorioX}px`;
  btnNao.style.top = `${aleatorioY}px`;
}
