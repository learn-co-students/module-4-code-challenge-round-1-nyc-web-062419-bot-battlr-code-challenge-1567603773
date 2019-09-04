import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
	let botsComponents = this.props.allBots.map(bot => 
		<BotCard
			onClick ={() => this.props.enlistClickHandler(bot)}			
			id={bot.id}
			bot={bot}
		/>
		)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  Collection of all bots
			  {botsComponents}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
