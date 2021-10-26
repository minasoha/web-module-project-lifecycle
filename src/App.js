import React from "react";
import User from "./components/User";
import FollowerList from "./components/FollowerList";
import axios from "axios";
class App extends React.Component {
  state = {
    userInfo: [],
    followerImages: [],
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
  render() {
    return (
      <div>
        <h1>GITHUB INFO</h1>
        <form>
          <input type="text" />
          <button>Search</button>
        </form>
        <User userInfo={this.state.userInfo} />
        <FollowerList />
      </div>
    );
  }
}

export default App;
