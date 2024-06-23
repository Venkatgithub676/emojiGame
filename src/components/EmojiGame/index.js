/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import NavBar from '../NavBar'
import './index.css'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    listItems: [],
    score: 0,
    topScore: 0,
    duplicateList: [],
    gameOver: false,
  }

  emojiBtn = id => {
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    const listItems = shuffledEmojisList()
    const {duplicateList} = this.state
    let {score, gameOver} = this.state

    const res = duplicateList.filter(each => each === id)
    if (res.length === 0) {
      duplicateList.push(id)
      score += 1
    }
    if (res.length > 0 || duplicateList.length === 12) {
      gameOver = true
    }

    this.setState({
      listItems,
      score,
      gameOver,
      duplicateList,
    })
  }

  playAgain = (score, topScore) => {
    const {emojisList} = this.props

    const res = topScore > score ? topScore : score

    this.setState({
      listItems: emojisList,
      gameOver: false,
      score: 0,
      topScore: res,
      duplicateList: [],
    })
  }

  emojiBody = res => (
    <div className="emoji-body">
      <ul className="ul-con">
        {res.map(each => (
          <EmojiCard each={each} key={each.id} emojiBtn={this.emojiBtn} />
        ))}
      </ul>
    </div>
  )

  render() {
    const {listItems, topScore, score, gameOver, duplicateList} = this.state
    console.log(duplicateList, gameOver)
    const {emojisList} = this.props
    const res = listItems.length === 0 ? emojisList : listItems
    return (
      <div className="bg-container">
        <NavBar gameOver={gameOver} score={score} topScore={topScore} />
        {gameOver ? (
          <WinOrLoseCard
            gameOver={gameOver}
            score={score}
            topScore={topScore}
            playAgain={this.playAgain}
            duplicateList={duplicateList}
          />
        ) : (
          this.emojiBody(res)
        )}
      </div>
    )
  }
}

export default EmojiGame
