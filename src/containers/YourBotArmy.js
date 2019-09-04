import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render() {
    const { bots, setEnlistmentStatus } = this.props;
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {bots
              .filter(b => b.enlisted === true)
              .map(b => (
                <BotCard
                  setEnlistmentStatus={setEnlistmentStatus}
                  key={b.name}
                  bot={b}
                />
              ))}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
