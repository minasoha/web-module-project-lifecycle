import React from "react";
import Follower from "./Follower";
import axios from "axios";

export default class FollowerList extends React.Component {
  state = {
    followers: [],
  };
  componentDidMount() {
    axios
      .get("https://api.github.com/users/minasoha/followers")
      .then((resp) => {
        this.setState({
          ...this.state,
          followers: resp.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <div className="followers">
          <h3>FOLLOWERS:</h3>
        </div>
        <div className="followers-card">
          <Follower
            key={this.state.followers.id}
            followers={this.state.followers}
          />
        </div>
      </div>
    );
  }
}
