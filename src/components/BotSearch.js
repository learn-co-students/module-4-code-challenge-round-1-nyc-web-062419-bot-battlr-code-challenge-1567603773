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
        <select
          style={{ margin: "20px" }}
          onChange={this.props.dropChange}
          value={this.props.dropdownVal}
        >
          <option value="Default">Filter by Bot Class</option>
          <option value="Assault">Assault</option>
          <option value="Defender">Defender</option>
          <option value="Support">Support</option>
        </select>
        <button onClick={this.props.shakeEm}>Press me if you dare</button>
        <br />
        <br />
      </div>
    )
  }
}
