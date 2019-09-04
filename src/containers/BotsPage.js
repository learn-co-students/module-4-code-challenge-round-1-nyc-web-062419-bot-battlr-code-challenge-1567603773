import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    army: [],
    stats: false,
    bot: []
  };

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(res => res.json())
      .then(data => this.setState({ bots: data }));
  }

  viewBot = bot => {
    this.viewStats();
    this.setState({ bot: bot });
  };

  removeBotFromArmy = bot => {
    if (this.state.army.includes(bot)) {
      this.setState({ army: this.state.army.filter(army => army !== bot) });
    }
  };

  addBotToArmy = bot => {
    if (!this.state.army.includes(bot)) {
      this.setState({ army: [...this.state.army, this.state.bot] });
      this.setState({ bot: [] });
      this.viewStats();
    }
  };

  viewStats = () => {
    this.setState({ stats: !this.state.stats });
  };

  render() {
    return (
      <div>
        <YourBotArmy army={this.state.army} click={this.removeBotFromArmy} />
        {this.state.stats ? (
          <BotSpecs
            bot={this.state.bot}
            click={this.addBotToArmy}
            goBack={this.viewStats}
          />
        ) : (
          <BotCollection bots={this.state.bots} click={this.viewBot} />
        )}
      </div>
    );
  }
}

export default BotsPage;
