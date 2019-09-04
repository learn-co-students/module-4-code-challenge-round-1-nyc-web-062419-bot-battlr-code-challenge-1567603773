import React from "react"
import BotCard from "../components/BotCard"

class BotCollection extends React.Component {
  //your code here

  render() {
    const botComponenets = this.props.allBots.map(bot => (
      <BotCard
        key={`bot-${bot.id}-${bot.name}`}
        bot={bot}
        botCollectionClick={this.props.botCollectionClick}
      />
    ))

    return (
      <div className="ui four column grid">
        <div className="row">{botComponenets}</div>
      </div>
    )
  }
}

export default BotCollection
