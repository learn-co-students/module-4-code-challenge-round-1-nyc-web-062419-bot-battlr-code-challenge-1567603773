import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){

    const renderBot = bot => <BotCard key={bot.id} bot_class={bot.bot_class} id={bot.id} avatar_url={bot.avatar_url} name={bot.name} catchphrase={bot.catchphrase} health={bot.health} damage={bot.damage} armor={bot.armor} clickHandle={this.props.removeOwnership(bot)}/>

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.owned.map(bot=> renderBot(bot))}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
   
};

export default YourBotArmy;
