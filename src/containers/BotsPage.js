import React from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'
import { stat } from "fs";
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {
  state = {
    botsArray: [],
    selectedBot: {},
    botInSpec: false
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then(data => {
      const arrayWithBoolean = data.map(bot => ({...bot, inArmy: false}))
      this.setState({ botsArray: arrayWithBoolean.slice(0, 8)})})
  }

  onBotClick = (botObj) => {
    this.setState({
      selectedBot: botObj,
      botInSpec: true
    })
  }

  onCancel = () => {
    this.setState({
      botInSpec: false
    })
  }

  onEnlist = (botObj) => {
    const newArray = this.state.botsArray.map(bot => {
      bot.id === botObj.id ? bot.inArmy = !bot.inArmy : bot
      return bot
    })
    this.setState({
      botsArray: newArray,
      botInSpec:false
    })
  }

  render() {
    const arrayOfBotsInArmy = this.state.botsArray.filter(bot => bot.inArmy)
    return (
      <div>
        <YourBotArmy botsArray={arrayOfBotsInArmy} onEnlist={this.onEnlist}/>
        {this.state.botInSpec ? <BotSpecs bot={this.state.selectedBot} onCancel={this.onCancel} onEnlist={this.onEnlist} /> : null }
        <BotCollection botsArray={this.state.botsArray} onBotClick={this.onBotClick} />
      </div>
    );
  }

}

export default BotsPage;
