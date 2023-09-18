//Tic Tac Toe Game
const game = document.querySelector('.my-game')
const info = document.querySelector('#info')
const gameCells = [
  '', '', '', '', '', '', '', '', '',
]

let play = "circle"
info.textContent = "It is Circle's turn"

function mainBoard() {
  gameCells.forEach((_cell, index) => {
    const createdElement = document.createElement('div')
    createdElement.classList.add('square')
    createdElement.id = index
    createdElement.addEventListener('click', function addShape(e) {
     const showShape = document.createElement('div')
     showShape.classList.add(play)
     e.target.append(showShape)
     play = play === "circle" ? "hex" : "circle"
     info.textContent = `It is now ${play} 's turn`
     e.target.removeEventListener('click', addShape)
     scores()
    })
    game.append(createdElement)
  })
}
function scores() {
  const squares = document.querySelectorAll('.square')
  const winGroups = [
    [0,1,2], [0,3,6], [3,4,5], [6,7,8], [1,4,7], [2,5,8],  [0,4,8], [2,4,6] 
  ]
  winGroups.forEach(array => {
    let circleWins = array.every(group => squares[group].firstChild?.classList.contains('circle'))
    if (circleWins) {
      info.textContent = 'Circle Wins'
      squares.forEach(square => square.replaceWith(square.cloneNode(true)))
      return
    }
  })

  winGroups.forEach(array => {
    let hexWins = array.every(group => squares[group].firstChild?.classList.contains('hex'))

    if (hexWins) {
      info.textContent = 'Hex Wins'
      squares.forEach(square => square.replaceWith(square.cloneNode(true)))
      return
    }
  })
}
mainBoard()