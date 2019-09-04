import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  render(){
    // console.log(botList)
    let botList = this.props.bots.map(bot => (
      <BotCard
      key={bot.id}
      bot={bot}
      addBotHandler={this.props.addBotHandler}
      botGroup=""
      />
    ))
    
    return (
  	  <div className="ui four column grid">
    		<div className="row">
          {botList}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;



