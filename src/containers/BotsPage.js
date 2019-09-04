import React from "react"
import BotCollection from "./BotCollection"
import BotCard from "../components/BotCard"

class BotsPage extends React.Component {
  //start here with your code for step one
  state = { bots: [] }
  componentDidMount() {
    fetch(`https://bot-battler-api.herokuapp.com/api/v1/bots`)
      .then(data => data.json())
      .then(botData => this.setState({ bots: botData }))
  }
  render() {
    let botList = this.props.bots.map(bot => {
    return (
      <div>
        {/* <BotCollection state={this.state} /> */}
        <BotCard name={bot.name}
        health={bot.health} />
        damage={bot.damage} />
      </div>
    )
  
    })

export default BotsPage
