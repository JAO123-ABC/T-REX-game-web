/* Troca de tela 1 e 2 */
window.addEventListener('load', (e) => {
    tela1.style.display = 'block'; 
    tela2.style.display = 'none'; 
});


const dino = document.querySelector(".dino"); /* Busca um elemento*/
const cacto = document.querySelector(".cacto");
const score = document.querySelector(".score");
let alreadyJump = false;
let count = 0;
let jogar = document.getElementById("jogar"); /* Busca o elemento pelo ID*/

/* Configurara a transicao de tela  */
jogar.addEventListener('click', function(){
    tela1.style.display = 'none'; 
    tela2.style.display = 'block'; 
});

/* Confiracao de botao de pulo */
document.addEventListener("keydown", (e) => {
  if ((e.code === "ArrowUp") | (e.code === "Space")) {
    jump();
  }
});

/* Definicao para o jump do dinossauro*/
function jump() {
  if (!dino.classList.contains("jump")) {
    dino.classList.add("jump");
    alreadyJump = true;

/* funcao de remocao do jump apos cliclar*/
    setTimeout(() => {
      dino.classList.remove("jump");
      alreadyJump = false;
    }, 1100);
  }
}

/* Calcula a posicao do Dino e ve se ele colidiu com o cacto*/
setInterval(() => {
  let dinoBottom = parseInt(
    window.getComputedStyle(dino).getPropertyValue("bottom") 
  );
  let cactoLeft = parseInt(
    window.getComputedStyle(cacto).getPropertyValue("left")
  );

  /* game over e resultado*/
  if (cactoLeft > 40 && cactoLeft < 150 && dinoBottom <= 50 && !alreadyJump) {
    alert(`Game Over! Seu score foi: ${count}`);
    count = 0;
  }

  /* Contador do Score*/
  count++;
  score.innerHTML = `SCORE: ${count}`;
}, 10);

