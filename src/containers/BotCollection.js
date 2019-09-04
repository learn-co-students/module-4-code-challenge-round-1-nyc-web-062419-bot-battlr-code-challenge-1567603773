import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {


  render(){
	let displayBots = this.props.botsArray.map(botmap => <BotCard key={botmap.id} bot={botmap} renderClick={this.props.renderClick}/>)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {displayBots}
    		  
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
