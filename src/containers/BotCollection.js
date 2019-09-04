import React from "react"
import BotCard from "../components/BotCard"

class BotCollection extends React.Component {
  //your code here

  render() {
    // console.log(this.props)
    let bot = this.props.bots
    return (
      <div className="ui four column grid">
        <div className="row">
          <BotCard bot={bot} clickHandler={this.props.clickHandler} />
          Collection of all bots
        </div>
      </div>
    )
  }
}

export default BotCollection
