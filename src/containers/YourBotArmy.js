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

            <div style={{display:'flex', justifyContent:'space-evenly', width:'100%'}}>

            <div style={{display:'flex', flexDirection:'column', alignItems:'center', width:'20vw'}}>
            <h2>Assault</h2>
            {this.props.owned.filter(bot => bot.bot_class === "Assault").map(bot=> renderBot(bot))}
            </div>

            <div style={{display:'flex', flexDirection:'column', alignItems:'center', width:'20vw'}}>
            <h2>Defender</h2>
            {this.props.owned.filter(bot => bot.bot_class === "Defender").map(bot=> renderBot(bot))}
            </div>

            <div style={{display:'flex', flexDirection:'column', alignItems:'center', width:'20vw'}}>
            <h2>Support</h2>
            {this.props.owned.filter(bot => bot.bot_class === "Support").map(bot=> renderBot(bot))}
            </div>
            
            </div>
            
          </div>
        </div>
      </div>
    );
  }
   
};

export default YourBotArmy;
