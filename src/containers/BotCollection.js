import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
	render() {
		let botComponents = this.props.bots.map(bot => {
			return <BotCard
				bot={bot}
				key={bot.id}
				handleClick={this.props.handleClick}
			/>
		})



		return (
			<div className="ui four column grid">
				<div className="row">
					{botComponents}
				</div>
			</div>
		);
	}

};

export default BotCollection;
