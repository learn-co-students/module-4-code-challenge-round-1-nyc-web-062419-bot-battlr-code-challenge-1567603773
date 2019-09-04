import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs"

class BotsPage extends React.Component {
  state = {
    botsArray: [],
    botsArmy: [],
    botSpec: []
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(resp => resp.json())
    .then(data => this.setState({botsArray: data}))
  }

  renderClick = (bot) => {
    if(!this.state.botsArmy.includes(bot)){
      let newArray = [...this.state.botsArmy, bot]
      this.setState({botsArmy: newArray});
      }
  }

  botSpecs = (bot) => {
    this.setState({botSpec: bot});
    console.log("botttt")

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
        <BotSpecs key={this.state.botSpec.id} bot={this.state.botSpec} renderSpecClick={this.renderClick}/>
        <BotCollection botsArray={this.state.botsArray} renderClick={this.botSpecs} />
      </div>
    );
  }

}

export default BotsPage;
