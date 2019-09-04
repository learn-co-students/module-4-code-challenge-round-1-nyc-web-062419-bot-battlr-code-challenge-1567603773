import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class BotCollection extends React.Component {
  //your code here
  state = { selected: null };

  setSelected = bot => {
    if (this.state.selected === null) {
      const selected = { ...bot };
      this.setState({ selected });
    } else {
      this.setState({ selected: null });
    }
  };

  render() {
    const { bots, setEnlistmentStatus } = this.props;
    const { selected } = this.state;

    if (!selected) {
      return (
        <div className="ui four column grid">
          <div className="row">
            {bots.map(b => (
              <BotCard
                //setEnlistmentStatus={setEnlistmentStatus}
                clickEvent={this.setSelected.bind(this)}
                key={b.id}
                bot={b}
              />
            ))}
            Collection of all bots
          </div>
        </div>
      );
    } else {
      return (
        <BotSpecs
          bot={selected}
          setEnlistmentStatus={setEnlistmentStatus}
          clickEvent={this.setSelected.bind(this)}
        />
      );
    }
  }
}

export default BotCollection;
