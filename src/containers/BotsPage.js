import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  state = {
    botsArray: [],
    botsArmy: []
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(resp => resp.json())
    .then(data => this.setState({botsArray: data}))
  }

  renderClick = (bot) => {
    if(!this.state.botsArmy.includes(bot)){
      let newArray = [...this.state.botsArmy, bot]
      this.setState({botsArmy: newArray})

    }
  }

  removeBot = (bot) => {
    if(this.state.botsArmy.includes(bot)){
      let newArray = this.state.botsArmy.filter(botObj => bot !== botObj)
      this.setState({botsArmy: newArray})
    }
  }
  render() {

    return (
      <div>
        <YourBotArmy botsArmy={this.state.botsArmy} renderClick={this.removeBot} />

        <BotCollection botsArray={this.state.botsArray} renderClick={this.renderClick}/>
      </div>
    );
  }

}

export default BotsPage;
