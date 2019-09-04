import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

	render(){
	const mappedBots = this.props.botsArray.map(bot => {
		return <BotCard
		bot={bot}
		onBotClick={this.props.onBotClick}
		key={bot.id}
		/>
	})
		return (
			<div className="ui four column grid">
				<div className="row">
				{mappedBots}
				</div>
		</div>
		);
  }

};

export default BotCollection;
