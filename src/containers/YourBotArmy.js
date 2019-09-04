import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render() {
    let botComponents = this.props.yourBots.map(bot => <BotCard bot={bot} key={bot.id} clickHandler={this.props.clickHandler} />)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {botComponents}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
