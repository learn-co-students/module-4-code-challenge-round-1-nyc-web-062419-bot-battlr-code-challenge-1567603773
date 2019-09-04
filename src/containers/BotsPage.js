import React, { Component, Fragment } from "react";
import YourBotArmy from './YourBotArmy';
import BotCollection from './BotCollection';

const API = "https://bot-battler-api.herokuapp.com/api/v1/bots"

class BotsPage extends Component {
  
  state = { bots: [], botArmy: [] }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(data => this.setState({ bots: data }))
  }

  addToBotArmy = (botObj) => {
    if(!this.state.botArmy.includes(botObj)){
      let botArmyArray = [botObj, ...this.state.botArmy];
      this.setState({ botArmy: botArmyArray });
    }
  }

  removeFromBotArmy = (botObj) => {
    let botArmyArray = this.state.botArmy.filter(bot => bot !== botObj);
    this.setState({ botArmy: botArmyArray });
  }


  render() {
    return (
      <Fragment>
        <YourBotArmy botArmy={this.state.botArmy} clickHandler={this.removeFromBotArmy} />
        <BotCollection bots={this.state.bots} clickHandler={this.addToBotArmy} />
      </Fragment>
    );
  }

}

export default BotsPage;
