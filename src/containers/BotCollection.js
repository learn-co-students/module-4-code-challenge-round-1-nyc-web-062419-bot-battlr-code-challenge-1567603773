import React from "react"
import BotCard from "../components/BotCard"

class BotCollection extends React.Component {
  //your code here

  //   componentDidMount() {
  //     fetch(`https://bot-battler-api.herokuapp.com/api/v1/bots`)
  //       .then(data => data.json())
  //       .then(botData => this.setState({ bots: botData }))
  //   }

  render() {
    let botList = this.props.bots.map(bot => <BotCard bot={bot} key={bot.id} />)
    return (
      <div className="ui four column grid">
        <div className="row">
          Collection of all bots
          {botList}
        </div>
      </div>
    )
  }
}

export default BotCollection
