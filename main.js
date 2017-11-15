const tetri = []
const playerElements = document.querySelectorAll('.player')

// this is the ES6 way... wasn't working in firefox
// [...playerElements].forEach(element => {
//   const tetris = new Tetris(element)
//   tetri.push(tetris)
// })

// had to use the old way
const playerElementsArr = Array.prototype.slice.call(playerElements)

playerElementsArr.forEach(element => {
  const tetris = new Tetris(element)
  tetri.push(tetris)
})

const keyListener = (event) => {
  [
    [65, 68, 81, 69, 83],
    [72, 75, 89, 73, 74],
  ].forEach((key, i) => {
    const player = tetri[i].player

    if (event.type === 'keydown') {
      if (event.keyCode === key[0]) { // left
        player.move(-1)
      } else if (event.keyCode === key[1]) { // right
        player.move(1)
      } else if (event.keyCode === key[2]) { // q
        player.rotate(-1)
      } else if (event.keyCode === key[3]) { // w
        player.rotate(1)
      }
    }

    if (event.keyCode === key[4]) {
      if (event.type === 'keydown') {
        if (player.dropInterval !== player.DROP_FAST) {
          player.drop()
          player.dropInterval = player.DROP_FAST
        }
      } else {
        player.dropInterval = player.DROP_SLOW
      }
    }
  })
}

document.addEventListener('keydown', keyListener)
document.addEventListener('keyup', keyListener)
