import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  render(){
    let botList = this.props.botArmy.map(bot => (
      <BotCard
      key={bot.id}
      bot={bot}
      removeBotHandler={this.props.removeBotHandler}
      botGroup="BotArmy"
      />
    ))

 
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {botList}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
