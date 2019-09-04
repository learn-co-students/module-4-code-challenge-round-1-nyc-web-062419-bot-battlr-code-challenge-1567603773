import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {

  state = {
    bots: [],
    yourBots: []
  }
  
  componentDidMount(){
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(resp => resp.json())
    .then(data => this.setState({bots: data}))
  }

  handleClick = (e, bot) => {
    if (!this.state.yourBots.includes(bot)){
      this.setState({yourBots: [...this.state.yourBots, bot]}) 
    } 
  }
  
  yourArmyClick = (e, bot) => {
    this.setState({yourBots: this.state.yourBots.filter(botObj => botObj !== bot)})
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.yourBots} handleClick={this.yourArmyClick}/>
        <BotCollection bots={this.state.bots} handleClick={this.handleClick}/>
      </div>
    );
  }

}

export default BotsPage;
