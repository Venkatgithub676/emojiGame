// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore} = props
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
        <div className="score-con">
          <h1 className="score">Score: {score}</h1>
          <h1 className="top-score">Top Score: {topScore}</h1>
        </div>
      </div>
    </nav>
  )
}
export default NavBar
