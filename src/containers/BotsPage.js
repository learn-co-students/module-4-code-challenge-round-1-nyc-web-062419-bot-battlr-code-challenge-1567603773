import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';


class BotsPage extends React.Component {
  state = {bots: [], botArmy:[], botGroup:""}

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(response => response.json())
      .then(data => this.setState({ bots: data }));
  }

  addBotHandler = botObj => {
    let newArray = [botObj, ...this.state.botArmy.filter(bot => bot.id !== botObj.id)]
    this.setState({ botArmy: newArray, botGroup: "BotArmy" });
  };
  
  removeBotHandler = botObj => {
    let newArray = this.state.botArmy.filter(bot => bot.id !== botObj.id)
    this.setState({ botArmy: newArray});
   };

  render() {
    return (
      <div>
        <YourBotArmy 
        botArmy={this.state.botArmy}
        botGroup={this.state.botGroup}
        removeBotHandler={this.removeBotHandler}/>

        <BotCollection 
        bots={this.state.bots}
        botGroup={this.state.botGroup}
        addBotHandler={this.addBotHandler}/>        
      </div>
    );
  }

}

export default BotsPage;
