import React from "react"
import BotCard from "../components/BotCard"

class YourBotArmy extends React.Component {
  //your bot army code here...

  render() {
    const botComponents = this.props.yourBots.map(bot => (
      <BotCard
        key={`your-bot-${bot.id}-${bot.name}`}
        bot={bot}
        botCollectionClick={this.props.botCollectionClick}
      />
    ))

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">{botComponents}</div>
        </div>
      </div>
    )
  }
}

export default YourBotArmy
