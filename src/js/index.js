const botoesCarrocel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

botoesCarrocel.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    desativarBotaoSelecionado();
    marcarBotaoSelecionado(botao);

    esconderImagemAtiva();
    mostrarImagem(indice);

    escondendoInfoAtiva();
    mostrarInfo(indice);
  });
});

function marcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function mostrarInfo(indice) {
  informacoes[indice].classList.add("ativa");
}

function escondendoInfoAtiva() {
  const informacoesAtiva = document.querySelector(".informacoes.ativa");
  informacoesAtiva.classList.remove("ativa");
}

function mostrarImagem(indice) {
  imagens[indice].classList.add("ativa");
}

function esconderImagemAtiva() {
  const imagemAtiva = document.querySelector(".ativa");
  imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector(".selecionado");
  botaoSelecionado.classList.remove("selecionado");
}
