const flipCards = document.querySelectorAll('#info-cards')
const flipBtns = document.querySelectorAll('#flip-btns')

function flipCard(btn) {
  const card = btn.parentNode
  const parentNode = card.parentNode
  let flipped = false

  if (card.attributes[0].textContent === 'card-front') {
    parentNode.style.transform = 'TranslateX(-50%)'
    flipped = true
  }
  else if (card.attributes[0].textContent === 'card-back') {
    parentNode.style.transform = 'TranslateX(0%)'
    flipped = false
  }
  setTimeout(() => {
    if (flipped) parentNode.style.transform = 'TranslateX(0%)'
  }, 10000);

}

flipBtns.forEach(flipBtn => {
  flipBtn.addEventListener('click', () => {
    flipCard(flipBtn)
  })
})
