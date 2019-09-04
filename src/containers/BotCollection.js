import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
	//your code here

	state = { bots: [] }

	componentDidMount() {
		fetch(`https://bot-battler-api.herokuapp.com/api/v1/bots`)
			.then(res => res.json())
			.then(data => this.setState({ bots: data }))
	}

	render() {
		let botComponents = this.state.bots.map(bot => <BotCard bot={bot} key={bot.id} clickHandler={this.props.clickHandler} />)
		return (
			<div className="ui four column grid">
				<div className="row">
					{botComponents}
					Collection of all bots
			</div>
			</div>
		);
	}

};

export default BotCollection;
