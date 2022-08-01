import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div
            className="big ui black ribbon label"
            style={{ marginBottom: "20px" }}
          >
            <i className="image icon"></i> Images Search
          </div>
          <div className="ui input" style={{ width: "100%" }}>
            <input
              className="prompt"
              type="text"
              placeholder="Search..."
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
