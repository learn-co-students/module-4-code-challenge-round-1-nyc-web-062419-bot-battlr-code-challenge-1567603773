import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs"


class BotCollection extends React.Component {
	//your code here

	state = {
		bots: [],
		bot: [],
		clicked: true
	}

	selectBotClick = (botObj) => {
		this.setState({ bot: botObj })
		this.setState({ clicked: false })
	}

	changeClickedState = () => {
		this.setState({ clicked: !this.state.clicked })
	}

	componentDidMount() {
		fetch(`https://bot-battler-api.herokuapp.com/api/v1/bots`)
			.then(res => res.json())
			.then(data => this.setState({ bots: data }))
	}

	render() {
		let botComponents = this.state.bots.map(bot => <BotCard bot={bot} key={bot.id} clickHandler={this.selectBotClick} />)
		let selectedBot = <BotSpecs bot={this.state.bot} clickHandler={this.props.clickHandler} changeClickedState={this.changeClickedState} />
		return (
			<div className="ui four column grid">
				<div className="row">
					{this.state.clicked ? botComponents : selectedBot}
					Collection of all Bots
				</div>
			</div>
		);
	}

};

export default BotCollection;