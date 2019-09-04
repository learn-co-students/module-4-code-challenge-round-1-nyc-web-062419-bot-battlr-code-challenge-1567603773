import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";
import Nav from "./Nav";

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    army: [],
    stats: false,
    bot: [],
    search: "",
    sort: ""
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
      this.setState({ army: [...this.state.army, bot] });
    }
    if (this.state.stats) {
      this.setState({ bot: [] });
      this.viewStats();
    }
  };

  sortHandler = e => {
    let hello = this.state.bots.sort((a, b) => a.e > b.e);
    console.log(hello);
  };

  viewStats = () => {
    this.setState({ stats: !this.state.stats });
  };

  searchHandler = e => {
    this.setState({ search: e });
  };

  randomizer = () => {
    this.addBotToArmy(
      this.state.bots[Math.ceil(Math.random() * this.state.bots.length)]
    );
  };

  render() {
    let filteredBots = this.state.bots.filter(
      bot => bot.name.toLowerCase() === this.state.search.toLowerCase()
    );
    let filteredArmy = this.state.army.filter(
      bot => bot.name.toLowerCase() === this.state.search.toLowerCase()
    );
    return (
      <div>
        <Nav
          search={this.searchHandler}
          click={this.randomizer}
          sort={this.sortHandler}
        />
        <YourBotArmy
          army={filteredArmy.length > 0 ? filteredArmy : this.state.army}
          click={this.removeBotFromArmy}
        />
        {this.state.stats ? (
          <BotSpecs
            bot={this.state.bot}
            click={this.addBotToArmy}
            goBack={this.viewStats}
          />
        ) : (
          <BotCollection
            bots={filteredBots.length > 0 ? filteredBots : this.state.bots}
            click={this.viewBot}
          />
        )}
      </div>
    );
  }
}

export default BotsPage;
