import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
// import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {
  state = { allBotsArray: [], yourBotsArray: [] }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(resp => resp.json())
      .then(data => this.setState({ allBotsArray: data }))
  }


  addBotToArmy = bot => {
    if (!this.state.yourBotsArray.includes(bot)) {
      this.setState({ yourBotsArray: this.state.yourBotsArray.concat(bot) })
    }
  }

  removeBotFromArmy = bot => {
    if (this.state.yourBotsArray.includes(bot)) {
      const newArray = this.state.yourBotsArray.filter(botObj => bot !== botObj)
      this.setState({ yourBotsArray: newArray })
    }
  }






  render() {
    return (
      <div>
        {
          <div>
            <YourBotArmy
              bots={this.state.yourBotsArray}
              handleClick={this.removeBotFromArmy}
            />
            <BotCollection
              bots={this.state.allBotsArray}
              handleClick={this.addBotToArmy}
            />

          </div>
        }
      </div>
    );
  }

}

export default BotsPage;
