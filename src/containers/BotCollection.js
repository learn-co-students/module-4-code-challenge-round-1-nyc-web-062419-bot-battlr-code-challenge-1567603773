import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render() {
    const { bots, setEnlistmentStatus } = this.props;
    return (
      <div className="ui four column grid">
        <div className="row">
          {bots.map(b => (
            <BotCard
              setEnlistmentStatus={setEnlistmentStatus}
              key={b.id}
              bot={b}
            />
          ))}
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;
