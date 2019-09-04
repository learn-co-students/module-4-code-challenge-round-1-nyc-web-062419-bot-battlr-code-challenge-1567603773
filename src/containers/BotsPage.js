import React from "react"
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one
  state = { allBots: [], yourBots: [] }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(resp => resp.json())
      .then(json => this.setState({ allBots: json }))
  }

  botCollectionClick = (e, bot) => {
    console.log("Bot Collection Click", bot)
    if (!this.state.yourBots.includes(bot)) {
      this.setState({ yourBots: [...this.state.yourBots, bot] })
    } else {
      alert(`You have already enlisted ${bot.name}`)
    }
  }

  render() {
    return (
      <div>
        <YourBotArmy yourBots={this.state.yourBots} />
        <BotCollection
          allBots={this.state.allBots}
          botCollectionClick={this.botCollectionClick}
        />
      </div>
    )
  }
}

export default BotsPage
