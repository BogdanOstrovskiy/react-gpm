import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "FIND YOUR MOViE",
      data: "",
      result: [],
      response: [
        {
          id: "1",
          name: "The Shawshank Redemption",
        },
        {
          id: "2",
          name: "The Godfather",
        },
        {
          id: "3",
          name: "The Dark Knight",
        },
        {
          id: "4",
          name: "The Godfather Part II",
        },
      ],
    };

    this.onNameInput = this.onNameInput.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange() {
    const res = this.state.response.filter((el) =>
        this.state.data ? el.name.includes(this.state.data) : false
    );

    this.setState({
      result: res.length
        ? res
        : [
            {
              id: "0",
              name: "Nothing found by the selected features.",
            },
          ],
    });
  }

  onNameInput(e) {
    this.setState({ data: e.target.value });
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement("h2", {}, this.state.title),
      React.createElement("input", {
        className: "input",
        placeholder: "What do you want to watch?",
        onInput: this.onNameInput,
      }),
      React.createElement("button", { onClick: this.onDateChange }, "search"),
      React.createElement("div", null, "Result:"),
      React.createElement(
        "ul",
        {},
        this.state.result.map((el) => React.createElement("li", null, el.name))
      )
    );
  }
}

export default Search;
