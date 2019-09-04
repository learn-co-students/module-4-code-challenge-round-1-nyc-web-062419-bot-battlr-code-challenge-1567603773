import React, { Component } from "react";

class BotSpecs extends Component {

  render(){
    const { 
      id,
      name,
      health, 
      damage, 
      armor, 
      bot_class, 
      catchphrase, 
      avatar_url 
    } = this.props.bot;

    const clickActionAddToArmy = () => this.props.addToArmyClick(this.props.bot)
    const clickActionGoBack = () => this.props.goBackButton()

  let botType;

  switch (bot_class) {
    case "Assault":
      botType = <i className="icon large circular military" />;
      break;
    case "Defender":
      botType = <i className="icon large circular shield" />;
      break;
    case "Support":
      botType = <i className="icon large circular ambulance" />;
      break;
    default:
      botType = <div />;
  }

  return (
    <div className="ui segment">
      <div className="ui two column centered grid">
        <div className="row">
          <div className="four wide column">
            <img
              alt={id}
              className="ui medium circular image bordered"
              src={avatar_url}
            />
          </div>
          <div className="four wide column">
            <h2>Name: {name}</h2>
            <p>
              <strong>Catchphrase: </strong>
              {catchphrase}
            </p>
            <strong>
              Class: {bot_class} {botType}
            </strong>
            <br />
            <div className="ui segment">
              <div className="ui three column centered grid">
                <div className="row">
                  <div className="column">
                    <i className="icon large circular red heartbeat" />
                    <strong>{health}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular yellow lightning" />
                    <strong>{damage}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular blue shield" />
                    <strong>{armor}</strong>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="ui button fluid"
              onClick={clickActionGoBack}
            >
              Go Back
            </button>
            <button
              className="ui button fluid"
              onClick={clickActionAddToArmy}
            >
              Enlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  }
  

};

export default BotSpecs;
