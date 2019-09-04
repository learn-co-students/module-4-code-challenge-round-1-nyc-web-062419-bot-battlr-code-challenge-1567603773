import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {


  render(){
    console.log(this.props.botsArmy)
    let botArmycard = this.props.botsArmy.map(bot => <BotCard key={bot.id} bot={bot} renderClick={this.props.renderClick}/>)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {botArmycard}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
