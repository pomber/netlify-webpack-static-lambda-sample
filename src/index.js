import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = { result: "..." };

  componentDidMount() {
    fetch("/.netlify/functions/time?code=123")
      .then(r => r.json())
      .then(({ result }) => this.setState({ result }));
  }

  render() {
    return <div>Result: {this.state.result}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
