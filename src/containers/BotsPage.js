import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"


class BotsPage extends React.Component {
  state={
	  botCollectionArray: [],
	  botArmyArray: []
  }

  componentDidMount(){
	  fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
	  .then(response => response.json())
	  .then(data => this.setState({
		  botCollectionArray: data
	  }))
  }

  /// working woo!

  // clickHandler=(event, obj)=>{
  //   console.log("CLICKED", event.target, obj)
  //   if (!this.state.botArmyArray.includes(obj)) {
  //     let newArray = [obj, ...this.state.botArmyArray]
  //     this.setState({
  //       botArmyArray: newArray,
  //       botCollectionArray: this.state.botCollectionArray.filter(item=>item !== obj)
  //     })
  //   } else {
  //     let otherArray = [obj, ...this.state.botCollectionArray]
  //     this.setState({
  //       botArmyArray: this.state.botArmyArray.filter(item => item !== obj),
  //       botCollectionArray: otherArray
  //     })
  //   }
  // }

    
    render() {
      return (
        <div>
        <YourBotArmy botArmyArray={this.state.botArmyArray}/>
        <BotCollection botCollectionArray={this.state.botCollectionArray}/>
      </div>
    );
  }

}

export default BotsPage;
