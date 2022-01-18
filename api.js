import React, { Component } from "react";

class App1 extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    const url =
      "https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*";

    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        console.log(result);
        this.setState({
          data: result,
        });
      });
  }

  render() {
    const { data } = this.state;
    const result = data.map((entry, index) => {
      return <li key={index}>{entry}</li>;
    });

    return <ul>{result}</ul>;
  }
}

export default App1;
