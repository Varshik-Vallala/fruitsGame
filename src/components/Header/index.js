import {Component} from 'react'

import './index.css'

class Header extends Component {
  render() {
    const {score, time} = this.props

    return (
      <>
        <div className="header">
          <div className="header-items">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
              className="logo"
              alt="website logo"
            />
            <ul className="score-timer-container">
              <li>
                <p className="score">
                  Score: <span className="value">{score}</span>
                </p>
              </li>
              <li>
                <span className="score-timer-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                    alt="timer"
                    className="timer-logo"
                  />
                  <p className="value">{`${time} sec`}</p>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </>
    )
  }
}

export default Header
