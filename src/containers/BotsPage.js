import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one

  state = { yourBots: [] }

  addBotToArmy = (botObj) => {
    if (!this.state.yourBots.includes(botObj)) {
      let newBotsArray = [...this.state.yourBots, botObj]
      this.setState({ yourBots: newBotsArray })
    }
  }

  removeBotFromArmy = botObj => {
    if (this.state.yourBots.includes(botObj)) {
      let newBotsArray = this.state.yourBots.filter(bot => bot !== botObj)
      this.setState({ yourBots: newBotsArray })
    }
  }

  render() {
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy yourBots={this.state.yourBots} clickHandler={this.removeBotFromArmy} />
        <BotCollection clickHandler={this.addBotToArmy} />
      </div>
    );
  }

}

export default BotsPage;
