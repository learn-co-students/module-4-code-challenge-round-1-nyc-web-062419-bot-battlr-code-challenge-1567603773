import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
import BotSpecs from "../components/BotSpecs"


class BotsPage extends React.Component {

  state = {
    bots: [],
    yourBots: [],
    botSelected: null
  }
  
  componentDidMount(){
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(resp => resp.json())
    .then(data => this.setState({bots: data}))
  }

  showSpecs = (e, bot) => {
    this.setState({botSelected: bot})
  }

  viewList = () => {
    this.setState({botSelected: null})
  }

  addToArmy = (e,bot) => {
      if (!this.state.yourBots.includes(bot)){
      this.setState({yourBots: [...this.state.yourBots, bot],botSelected: null
      }) 
    } 
  }
  
  removeFromArmy = (e, bot) => {
    this.setState({yourBots: this.state.yourBots.filter(botObj => botObj !== bot)})
  }


  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.yourBots} handleClick={this.removeFromArmy}/>
        {this.state.botSelected ? <BotSpecs bot={this.state.botSelected} addToArmy={this.addToArmy} viewList={this.viewList}/> :
          <BotCollection bots={this.state.bots} handleClick={this.showSpecs}/>}
      </div>
    );
  }

}

export default BotsPage;
