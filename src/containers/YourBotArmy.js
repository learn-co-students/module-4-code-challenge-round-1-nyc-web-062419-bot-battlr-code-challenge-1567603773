import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render() {
    let bot = this.props.army.map(bot => (
      <BotCard key={bot.id} bot={bot} click={this.props.click} />
    ));

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {/*...and here...*/ bot}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
