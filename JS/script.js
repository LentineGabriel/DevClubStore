// criando variáveis (creating variables)
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const items = document.querySelectorAll(".item");
const dots = document.querySelectorAll(".dot");
const numberIndicator = document.querySelector(".numbers");
const list = document.querySelector(".list");
const total = items.length;
let active = 0;
let timer;

// criando funções (creating functions)
function update(direction) {
  // quando encontrar, vai remover o .active (when it finds it, it'll remove the .active)
  document.querySelector(".item.active").classList.remove("active");
  document.querySelector(".dot.active").classList.remove("active");

  // movendo as setas (moving the arrows)
  if (direction > 0) {
    active++;

    if (active === total) {
      active = 0;
    }
  } else if (direction < 0) {
    active--;

    if (active < 0) {
      active = total - 1;
    }
  }

  // trocar o .active entre os itens (switching .active between items)
  items[active].classList.add("active");
  dots[active].classList.add("active");

  // mudando o número de acordo com a posição (changing number according to the position)
  numberIndicator.textContent = String(active + 1).padStart(2, "0");
}

// temporizador p/ mudar automaticamente (auto switching timer)
clearInterval(timer);
timer = setInterval(() => {
  update(1); // ir sempre 'next' (always 'next')
}, 6000);

// carrossel de itens (items carousel)
prevButton.addEventListener("click", () => {
  update(-1); // sempre volta um item (an item always comes back)
});
nextButton.addEventListener("click", () => {
  update(+1); // sempre passa por mais um item (always goes through one more item)
});
