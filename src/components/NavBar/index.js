// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, gameOver} = props

  return (
    <nav className="nav-con">
      <div className="logo-score-con">
        <div className="logo-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="emoji-logo"
          />
          <h1 className="logo-name">Emoji Game</h1>
        </div>
        {!gameOver && (
          <div className="score-con">
            <p className="score">Score: {score}</p>
            <p className="top-score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}
export default NavBar
