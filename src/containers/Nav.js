import React from "react";

class Nav extends React.Component {
  state = {
    searchTerm: "",
    sort: ""
  };
  changeHandler = e => {
    this.setState({ searchTerm: e.target.value });
    this.props.search(e.target.value);
  };

  sortHandler = e => {
    this.setState({ sort: e.target.value });
  };

  render() {
    return (
      <div className="nav">
        <input
          type="text"
          name="search"
          placeholder="search bot"
          value={this.state.searchTerm}
          onChange={this.changeHandler}
        />
        <button onClick={this.props.click}> Randomizer </button>
        Sort By :
        <select value={this.state.sort} onChange={this.sortHandler}>
          <option value="health">Health</option>
          <option value="damage">Damage</option>
          <option value="armor">Armor</option>
        </select>
      </div>
    );
  }
}

export default Nav;
