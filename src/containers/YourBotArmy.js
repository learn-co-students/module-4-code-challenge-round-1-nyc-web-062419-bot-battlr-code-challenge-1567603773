import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

  render(){
    const mappedBots = this.props.botsArray.map(bot => {
      return <BotCard
      bot={bot}
      onBotClick={this.props.onBotClick}
      onEnlist={this.props.onEnlist}
      />
    })
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {mappedBots}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
