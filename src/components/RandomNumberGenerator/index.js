// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    count: 0,
  }

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onGenerate = () => {
    const randomNumber = this.getRandomNumber()

    this.setState({count: randomNumber})
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <div className="count-container">
          <h1 className="head">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="generate-button"
            onClick={this.onGenerate}
          >
            Generate
          </button>
          <p className="random-number">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
