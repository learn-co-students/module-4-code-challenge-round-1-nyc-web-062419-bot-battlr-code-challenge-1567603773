import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy"
import BotSpecs from "../components/BotSpecs"

class BotsPage extends React.Component {
  //start here with your code for step one
  state={owned: [], showingSpecs: undefined}

  // support, defender, Assault

  viewStats = bot =>  () => {
    this.setState({showingSpecs: bot})
  }

  addOwnership = bot => () => {

    console.log(this.state.owned.filter(b => b.bot_class === bot.bot_class))

    if (!this.state.owned.find(b => b.id === bot.id) && this.state.owned.filter(b => b.bot_class === bot.bot_class).length < 2) {
      this.setState({owned: [...this.state.owned, bot]})
    }
    this.setState({showingSpecs: undefined})
  }

  unSelect = () => this.setState({showingSpecs: undefined})

  removeOwnership = bot => () => {
    this.setState({owned: this.state.owned.filter( b => b.id !== bot.id)})
  }

  render() {

    const bot = this.state.showingSpecs

    return (
      <div>
        <YourBotArmy owned={this.state.owned} removeOwnership={this.removeOwnership} />

        {this.state.showingSpecs ?
        <BotSpecs bot_class={bot.bot_class} id={bot.id} avatar_url={bot.avatar_url} name={bot.name} catchphrase={bot.catchphrase} health={bot.health} damage={bot.damage} armor={bot.armor} addOwnership={this.addOwnership(bot)} unSelect={this.unSelect} /> :
        <BotCollection viewStats={this.viewStats} />
        }
      </div>
    );
  }

}

export default BotsPage;
