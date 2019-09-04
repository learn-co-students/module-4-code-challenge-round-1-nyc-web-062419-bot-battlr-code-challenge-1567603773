import React from "react";
import BotsCollection from '../containers/BotCollection'
import YourBotArmy from '../containers/YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {

  state={
    allBots: [],
    yourBots: [],
    showingSpec: false
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

  // specClickHandler = thisBot => {
  //   if(this.state.ShowingSpec === false) {
  //     this.setState()
  //   }
  // }

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
          showSpec = {this.state.showSpec}
          enlistClickHandler = {this.enlistClickHandler} 
          allBots = {this.state.allBots}
        />
      </div>
    )
  }

}

export default BotsPage;
