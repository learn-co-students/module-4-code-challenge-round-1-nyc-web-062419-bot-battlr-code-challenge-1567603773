import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

	state={bots: []}
  
	componentDidMount () {
		fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
		.then(resp => resp.json())
		.then(data => this.setState({bots: data}))
	}

	

  render(){

	const renderBot = bot => <BotCard key={bot.id} bot_class={bot.bot_class} id={bot.id} avatar_url={bot.avatar_url} name={bot.name} catchphrase={bot.catchphrase} health={bot.health} damage={bot.damage} armor={bot.armor} clickHandle={this.props.addOwnership(bot)}/>

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.state.bots.map(bot => renderBot(bot))}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
