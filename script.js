
function fetchAdvice() {
    fetch('https://api.adviceslip.com/advice')

.then(response => response.json())
.then(data => {
    const singleId = document.getElementById('adviceNumber');
    const adviceParagraph = document.getElementById('advice');

   // Exibir o ID único no elemento com ID "singleId"
    singleId.textContent = `${data.slip.id}`;

    // Exibir o parágrafo no elemento com ID "adviceParagraph"
    adviceParagraph.textContent = data.slip.advice;

    console.log(data)
})
}
// Função para obter um novo conselho quando o botão for clicado
function getNewAdvice() {
    fetchAdvice();
  }
  
  // Event listener para o botão "Obter Novo Conselho"
  const getAdviceButton = document.getElementById('getAdviceButton');
  getAdviceButton.addEventListener('click', getNewAdvice);

  // Obter um conselho aleatório ao carregar a página
fetchAdvice();





