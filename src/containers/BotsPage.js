import React from "react"
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
import BotSpecs from "../components/BotSpecs"
import BotSearch from "../components/BotSearch"

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    allBots: [],
    yourBots: [],
    toggleSpecs: false,
    theOneBot: "",
    searchText: ""
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(resp => resp.json())
      .then(json => this.setState({ allBots: json }))
  }

  // This is the old Bot Collection Click before implementing BotSpecs
  // botCollectionClick = (e, bot) => {
  //   console.log("Bot Collection Click", bot)
  //   if (!this.state.yourBots.includes(bot)) {
  //     this.setState({ yourBots: [...this.state.yourBots, bot] })
  //   } else {
  //     alert(`You have already enlisted ${bot.name}`)
  //   }
  // }

  botCollectionClick = (e, bot) => {
    this.setState({ toggleSpecs: true, theOneBot: bot })
  }

  botSpecsBackClick = () => {
    this.setState({ toggleSpecs: false })
  }

  botSpecsEnlistClick = (e, bot) => {
    if (!this.state.yourBots.includes(bot)) {
      this.setState({ yourBots: [...this.state.yourBots, bot] })
    } else {
      alert(`You have already enlisted ${bot.name}`)
    }
    this.botSpecsBackClick()
  }

  botSearchChange = e => {
    this.setState({ searchText: e.target.value })
  }

  render() {
    const matchingBots = this.state.allBots.filter(bot =>
      bot.name.toLowerCase().includes(this.state.searchText.toLowerCase())
    )

    return (
      <div>
        <YourBotArmy
          yourBots={this.state.yourBots}
          botCollectionClick={() => {}}
        />

        {/* Control the toggle of the BotSpecs and BotCollection */}
        {this.state.toggleSpecs ? (
          <BotSpecs
            bot={this.state.theOneBot}
            backClicked={this.botSpecsBackClick}
            enlistClicked={this.botSpecsEnlistClick}
          />
        ) : (
          <div>
            <BotSearch
              input={this.state.searchText}
              changed={this.botSearchChange}
            />
            <BotCollection
              allBots={matchingBots}
              botCollectionClick={this.botCollectionClick}
            />
          </div>
        )}
      </div>
    )
  }
}

export default BotsPage
