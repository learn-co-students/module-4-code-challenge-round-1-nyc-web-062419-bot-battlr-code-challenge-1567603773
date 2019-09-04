import React from "react"

export default class BotSearch extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Filter bots by name"
          style={{ width: "80%" }}
          value={this.props.input}
          onChange={this.props.changed}
        />
        <br />
        <br />
      </div>
    )
  }
}
