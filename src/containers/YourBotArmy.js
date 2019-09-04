import React from "react"
import BotCard from "../components/BotCard"

class YourBotArmy extends React.Component {
  //your bot army code here...

  render() {
    console.log(this.props)
    let bot = this.props.bots
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            <BotCard bot={bot} clickHandler={this.props.clickHandler} />
            Your Bot Army
          </div>
        </div>
      </div>
    )
  }
}

export default YourBotArmy
