import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){

    const renderBot = bot => <BotCard key={bot.id} bot_class={bot.bot_class} id={bot.id} avatar_url={bot.avatar_url} name={bot.name} catchphrase={bot.catchphrase} health={bot.health} damage={bot.damage} armor={bot.armor} clickHandle={this.props.removeOwnership(bot)}/>

    const assaulters = this.props.owned.filter(bot => bot.bot_class === "Assault")

    const defenders = this.props.owned.filter(bot => bot.bot_class === "Defender")

    const supporters = this.props.owned.filter(bot => bot.bot_class === "Support")

    const titleStyle = {margin: '4vh 0', padding: '1vh 2vw', background:'grey', border:'grey solid 1vw', borderRadius:'.4vw'}

    const subTitleStyle = {margin: '0 0 2vh 0', padding: '1vh 1vw', background:'grey', border:'grey solid .4vw', borderRadius:'.2vw'}

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid" style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <h1 style={titleStyle}>Your Robot Army</h1>
          <div className="row bot-army-row">

            <div style={{display:'flex', justifyContent:'space-evenly', width:'100%'}}>

            <div style={{display:'flex', flexDirection:'column', alignItems:'center', width:'30vw'}}>
            <h2 style={subTitleStyle}>Assault Class</h2>
            <h3 style={{margin:'0 0 2vh 0'}}>({2 - assaulters.length} slot{2 - assaulters.length !== 1 ? "s": ""} remaining)</h3>

            <div style={{display:'flex'}}>
              {assaulters.map(bot=> renderBot(bot))}
            </div>
            

            </div>

            <div style={{display:'flex', flexDirection:'column', alignItems:'center', width:'30vw'}}>
            <h2 style={subTitleStyle}>Defender Class</h2>
            <h3 style={{margin:'0 0 2vh 0'}}>({2 - defenders.length} slot{2 - defenders.length !== 1 ? "s": ""} remaining)</h3>

            <div style={{display:'flex'}}>
            {defenders.map(bot=> renderBot(bot))}
            </div>

            </div>

            <div style={{display:'flex', flexDirection:'column', alignItems:'center', width:'30vw'}}>
            <h2 style={subTitleStyle}>Support Class</h2>
            <h3 style={{margin:'0 0 2vh 0'}}>({2 - supporters.length} slot{2 - supporters.length !== 1 ? "s": ""} remaining)</h3>

            <div style={{display:'flex'}}>
            {supporters.map(bot=> renderBot(bot))}
            </div>

            </div>
            
            </div>
            
          </div>
        </div>
      </div>
    );
  }
   
};

export default YourBotArmy;
