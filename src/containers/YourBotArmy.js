import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    let armyComponents = this.props.yourBots.map(bot => 
      <BotCard
        onClick={() => this.props.enlistClickHandler(bot)}
        id={bot.id}
        bot={bot}
      />
      )
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
              {armyComponents}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
