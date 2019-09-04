import React from "react";
import BotCard from "../components/BotCard";
import FilterBots from "../components/FilterBots";

class BotCollection extends React.Component {

	state = {
		filter: ""
	}

	filterBots = (e) => {
		this.setState({filter: e.target.value})
	}


	render(){
		return (
			<div className="ui four column grid">
				<FilterBots filterBots={this.filterBots}/>
				<div className="row">
					{/* Collection of all bots */}
					{this.state.filter ? this.props.bots.filter(botObj => botObj.bot_class === this.state.filter).map(bot => <BotCard key={"bot" + bot.id} bot={bot} handleClick={this.props.handleClick}/>) : this.props.bots.map(bot => <BotCard key={"bot" + bot.id} bot={bot} handleClick={this.props.handleClick}/>)}
				</div>
			</div>
		);
	}

};

export default BotCollection;
