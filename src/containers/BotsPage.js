import React from "react";
import BotsCollection from '../containers/BotCollection'
import YourBotArmy from '../containers/YourBotArmy'

class BotsPage extends React.Component {

  state={
    allBots: [],
    yourBots: [],
  }

  enlistClickHandler = thisBot => {
    if(this.state.yourBots.includes(thisBot)) {
      this.setState({yourBots: this.state.yourBots.filter( bot => bot !== thisBot)})
      console.log(thisBot)
    }
    else {
      this.setState({yourBots: [thisBot, ...this.state.yourBots], allBots: this.state.allBots.filter( bot => bot !== thisBot)} )
      console.log(thisBot)
    }
  }

  componentDidMount(){
    console.log('fetch is firing')
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then(data => this.setState({allBots: data}))
  }

  render() {
    return (
      <div>
        
        <YourBotArmy
          enlistClickHandler = {this.enlistClickHandler} 
          yourBots = {this.state.yourBots}
        />
        <BotsCollection
          enlistClickHandler = {this.enlistClickHandler} 
          allBots = {this.state.allBots}
        />
      </div>
    );
  }

}

export default BotsPage;
