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
  state = {listItems: [], score: 0, topScore: 0}

  emojiBtn = id => {
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    console.log(shuffledEmojisList)
    this.setState({listItems: shuffledEmojisList()})
  }

  render() {
    const {listItems} = this.state
    const {emojisList} = this.props
    const res = listItems.length === 0 ? emojisList : listItems
    return (
      <div className="bg-container">
        <NavBar />
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
