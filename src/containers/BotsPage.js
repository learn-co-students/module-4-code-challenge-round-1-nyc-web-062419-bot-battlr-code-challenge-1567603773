import React from "react"
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one
  state = { botsArray: [], botArmyArray: [] }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(resp => resp.json())
      .then(data => {
        this.setState({ botsArray: data })
      })
  }

  clickHandler = robotObj => {
    console.log("click")
    if (!this.state.botArmyArray.includes(robotObj)) {
      let newArray = [...this.state.botArmyArray, robotObj]
      this.setState({ botArmyArray: newArray })
    } else {
      let newArray = this.state.botArmyArray.filter(robot => robot !== robotObj)
      this.setState({ botArmyArray: newArray })
    }
  }

  render() {
    // console.log(this.state.botArmyArray)
    let bots = this.state.botsArray.map(botsObj => {
      return (
        <div>
          <BotCollection
            key={botsObj.id}
            bots={botsObj}
            clickHandler={this.clickHandler}
          />
          <YourBotArmy
            key={botsObj.id}
            bots={botsObj}
            clickHandler={this.clickHandler}
          />
        </div>
      )
    })
    return <div>{bots}</div>
  }
}

export default BotsPage
