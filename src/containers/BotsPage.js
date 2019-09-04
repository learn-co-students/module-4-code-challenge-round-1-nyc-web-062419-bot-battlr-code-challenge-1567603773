import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one

  state = { bots: [] };

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(r => r.json())
      .then(bots =>
        this.setState({ bots: bots.map(b => ({ ...b, enlisted: false })) })
      );
  }

  enlistBotToArmy = bot => {
    const bots = this.state.bots.map(b =>
      b.id === bot.id ? { ...b, enlisted: true } : b
    );
    this.setState({ bots });
  };

  deEnlistBotFromArmy = bot => {
    const bots = this.state.bots.map(b =>
      b.id === bot.id ? { ...b, enlisted: false } : b
    );
    this.setState({ bots });
  };

  render() {
    return (
      <div>
        <YourBotArmy
          setEnlistmentStatus={this.deEnlistBotFromArmy.bind(this)}
          {...this.state}
        />
        <BotCollection
          setEnlistmentStatus={this.enlistBotToArmy.bind(this)}
          {...this.state}
        />
      </div>
    );
  }
}

export default BotsPage;
