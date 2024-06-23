// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {gameOver, score, topScore, playAgain, duplicateList} = props

  let res
  let res1
  let res2

  if (duplicateList.length === 12) {
    res = 'You Won'
    res1 = 'Best Score'
    res2 = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
  } else {
    res = 'You Lose'
    res1 = 'Score'
    res2 = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  }

  const onClickPlayAgain = () => {
    playAgain(score, topScore, gameOver)
  }

  return (
    <div className="win-lose-container">
      <div className="dtls-img-con">
        <div className="dtls-con">
          <h1 className="win-lose-heading">{res}</h1>
          <p className="score-heading">{res1}</p>
          <p className="final-score">{score}/12</p>
          <button
            onClick={onClickPlayAgain}
            type="button"
            className="play-again"
          >
            Play Again
          </button>
        </div>
        <img src={res2} alt="win or lose" className="img-win-lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
