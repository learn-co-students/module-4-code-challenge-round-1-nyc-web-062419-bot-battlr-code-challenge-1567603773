import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  render(){
	let botList= this.props.botCollectionArray.map(bot => (
		<BotCard key={bot.id} bot={bot} clickHandler={this.props.clickHandler}/>
	))

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  Collection of all bots
    		  {botList}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
