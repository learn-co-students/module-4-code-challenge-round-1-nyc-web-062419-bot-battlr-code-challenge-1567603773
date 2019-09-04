import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one
  state={owned: []}

  addOwnership = bot =>  () => {
    if (!this.state.owned.includes(bot)) {
      this.setState({owned: [...this.state.owned, bot]})
    }
  }

  removeOwnership = bot => () => {
    this.setState({owned: this.state.owned.filter( b => b.id !== bot.id)})
  }

  render() {
    return (
      <div>
        <YourBotArmy owned={this.state.owned} removeOwnership={this.removeOwnership} />
        <BotCollection addOwnership={this.addOwnership} />
      </div>
    );
  }

}

export default BotsPage;
