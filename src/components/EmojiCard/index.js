// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {each, emojiBtn} = props
  const {id, emojiName, emojiUrl} = each

  const onClickEmojiBtn = () => {
    emojiBtn(id)
  }

  return (
    <li className="li-con" onClick={onClickEmojiBtn}>
      <button className="emoji-btn" type="button">
        <img className="emojis" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
