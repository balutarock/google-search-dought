// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {search: ''}

  onArrowSuggestion = value => {
    this.setState({search: value})
  }

  onInputElement = event => {
    this.setState({search: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {search} = this.state
    const searchResult = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(search.toLowerCase()),
    )
    return (
      <div className="g-s-bg-container">
        <div className="g-s-card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="google-logo"
            alt="google logo"
          />
          <div className="s-g-list-container">
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                className="search-logo"
                alt="search icon"
              />
              <input
                type="search"
                className="input-element"
                placeholder="Search Google"
                onChange={this.onInputElement}
              />
            </div>
            <ul className="ul-items">
              {searchResult.map(each => (
                <SuggestionItem
                  eachList={each}
                  key={each.id}
                  onArrowSuggestion={this.onArrowSuggestion}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
