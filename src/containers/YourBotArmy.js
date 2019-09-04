import React, { Component } from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends Component {

  render(){

    let myBotArmy = this.props.botArmy.map(bot => <BotCard key={bot.id} bot={bot} whenClicked={this.props.clickHandler} />)

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {myBotArmy}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
