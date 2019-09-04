import React, {Component} from "react";
import BotCard from "../components/BotCard";
import PropTypes from 'prop-types';

class BotCollection extends Component {

	static propTypes = {
		bot: PropTypes.array.isRequired,
		clickHandler: PropTypes.func.isRequired
	}

	render(){

	let allBots = this.props.bots.map(bot => <BotCard key={bot.id} bot={bot} whenClicked={this.props.clickHandler} />)

	return (
		<div className="ui four column grid">
			<div className="row">
			{allBots}
			Collection of all bots
			</div>
		</div>
		);
	}

};

export default BotCollection;
