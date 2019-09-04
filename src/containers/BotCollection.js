import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs"

class BotCollection extends React.Component {

	clickHandler=(event, obj)=>{
		console.log(obj)
		let specs = <BotSpecs bot={obj} clickHandler={this.clickHandler}/>
	}

  render(){
	let botList= this.props.botCollectionArray.map(bot => (
		<div>
			<BotCard key={bot.id} bot={bot} clickHandler={this.clickHandler}/>
		</div>

	))

	// let pageContent = this.clickHandler ? 
	// this.props.botCollectionArray.map(bot => ( 
	// <BotSpecs key={bot.id} bot={bot}/>)) 
	// : {botList}

		/// totally messing up the refactoring section! Sorry for the mess!, but in my last commit i did get to the checkpoint!

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
