// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {eachList, onArrowSuggestion} = props
  const {suggestion} = eachList

  const onArrow = () => {
    onArrowSuggestion(suggestion)
  }

  return (
    <li className="li">
      <p className="suggestion">{suggestion}</p>
      <button type="button" onClick={onArrow} className="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow-log"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
