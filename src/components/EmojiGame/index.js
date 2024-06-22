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

class EmojiGame extends Component {
  state = {listItems: [], score: 0, topScore: 0, duplicateList: []}

  emojiBtn = id => {
    let gameOver = false
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }

    const {duplicateList} = this.state
    let {score} = this.state

    const res = duplicateList.filter(each => each === id)
    console.log(res)
    if (res.length === duplicateList.length) {
      duplicateList.push(id)
      score += 1
    }
    const res1 =
      res.length > duplicateList.length ? (gameOver = true) : (gameOver = false)
    console.log(res1)
    this.setState({
      listItems: shuffledEmojisList(),
      score,
      gameOver,
    })
  }

  render() {
    const {listItems, topScore, score} = this.state
    const {emojisList} = this.props
    const res = listItems.length === 0 ? emojisList : listItems
    return (
      <div className="bg-container">
        <NavBar score={score} topScore={topScore} />
        <div className="emoji-body">
          <ul className="ul-con">
            {res.map(each => (
              <EmojiCard each={each} key={each.id} emojiBtn={this.emojiBtn} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default EmojiGame
