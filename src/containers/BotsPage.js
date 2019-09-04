import React, { Component, Fragment } from "react";
import YourBotArmy from './YourBotArmy';
import BotCollection from './BotCollection';
import BotSpecs from "../components/BotSpecs";

const API = "https://bot-battler-api.herokuapp.com/api/v1/bots"

class BotsPage extends Component {
  
  state = { bots: [], botArmy: [], specBot: {}, clicked: true }

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

  displaySpecs = (botObj) => {
    this.setState({ clicked: !this.state.clicked })
    this.setState({ specBot: botObj})
  }

  goBackButton = () => {
    this.setState({ specBot: {}})
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    const isClicked = this.state.clicked;
    return (
      <Fragment>
        <YourBotArmy botArmy={this.state.botArmy} clickHandler={this.removeFromBotArmy} />
        {isClicked ? (<BotCollection bots={this.state.bots} clickHandler={this.displaySpecs} />) 
        : (<BotSpecs bot={this.state.specBot} goBackButton={this.goBackButton} addToArmyClick={this.addToBotArmy}/>)}
      </Fragment>
    );
  }

}

export default BotsPage;
