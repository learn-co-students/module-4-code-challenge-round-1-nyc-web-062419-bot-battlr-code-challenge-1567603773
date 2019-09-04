import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render() {
    let bot = this.props.bots.map(bot => (
      <BotCard key={bot.id} bot={bot} click={this.props.click} />
    ));
    return (
      <div className="ui four column grid">
        Collection of all bots
        <div className="row">{/*...and here..*/ bot}</div>
      </div>
    );
  }
}

export default BotCollection;
