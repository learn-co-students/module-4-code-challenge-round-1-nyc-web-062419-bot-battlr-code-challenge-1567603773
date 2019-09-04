import React from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'
import { stat } from "fs";

class BotsPage extends React.Component {
  state = {
    botsArray: []
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then(data => {
      const arrayWithBoolean = data.map(bot => ({...bot, inArmy: false}))
      this.setState({ botsArray: arrayWithBoolean.slice(0, 8)})})
  }

  onBotClick = (botObj) => {
    const newArray = this.state.botsArray.map(bot => {
      bot.id === botObj.id ? bot.inArmy = !bot.inArmy : bot
      return bot
    })
    this.setState({
      botsArray: newArray
    }, () => console.log(this.state.botsArray))
  }
  render() {
    const arrayOfBotsInArmy = this.state.botsArray.filter(bot => bot.inArmy)
    console.log(arrayOfBotsInArmy)
    return (
      <div>
        <YourBotArmy botsArray={arrayOfBotsInArmy} />
        <BotCollection botsArray={this.state.botsArray} onBotClick={this.onBotClick} />
      </div>
    );
  }

}

export default BotsPage;
