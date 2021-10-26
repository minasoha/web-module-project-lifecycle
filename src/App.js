import React from "react";
import User from "./components/User";
import FollowerList from "./components/FollowerList";
import axios from "axios";
import "./App.css";
class App extends React.Component {
  state = {
    userInfo: [],
    input: "",
  };
  componentDidMount() {
    axios
      .get("https://api.github.com/users/minasoha")
      .then((resp) => {
        this.setState({
          ...this.state,
          userInfo: resp.data,
        });
      })
      .catch((err) => console.log(err));
  }
  handleClick = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.input}`)
      .then((resp) => {
        this.setState({
          ...this.state,
          userInfo: resp.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handleChange = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value,
    });
  };
  render() {
    return (
      <div className="App">
        <h1>GITHUB INFO</h1>
        <form>
          <input
            value={this.state.input}
            onChange={this.handleChange}
            type="text"
          />
          <button onClick={this.handleClick}>Search</button>
        </form>
        <User userInfo={this.state.userInfo} />
        <FollowerList />
      </div>
    );
  }
}

export default App;
