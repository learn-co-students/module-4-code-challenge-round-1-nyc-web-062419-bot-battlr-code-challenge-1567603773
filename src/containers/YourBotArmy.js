import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render() {
    let botComponents = this.props.bots.map(bot => {
      return (<BotCard
        key={bot.name}
        bot={bot}
        // name={bot.name}
        // health={bot.health}
        // damage={bot.damage}
        // armor={bot.armor}
        // bot_class={bot.bot_class}
        // catchphrase={bot.catchphrase}
        // avatar_url={bot.avatar_url}
        handleClick={this.props.handleClick}
      />)
    })
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {botComponents}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
