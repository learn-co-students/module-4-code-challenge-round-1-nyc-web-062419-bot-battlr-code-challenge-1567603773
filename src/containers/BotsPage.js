import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    army: []
  };

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(res => res.json())
      .then(data => this.setState({ bots: data }));
  }

  addBotToArmy = bot => {
    if (!this.state.army.includes(bot)) {
      this.setState({ army: [...this.state.army, bot] });
    }
  };

  removeBotFromAmry = bot => {
    if (this.state.army.includes(bot)) {
      this.setState({ army: this.state.army.filter(army => army !== bot) });
    }
  };

  render() {
    return (
      <div>
        <YourBotArmy army={this.state.army} click={this.removeBotFromAmry} />
        <BotCollection bots={this.state.bots} click={this.addBotToArmy} />
      </div>
    );
  }
}

export default BotsPage;
