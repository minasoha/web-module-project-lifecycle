import React from "react";

export default class User extends React.Component {
  render() {
    const { userInfo } = this.props;
    return (
      <div>
        <img src={userInfo.avatar_url} alt={userInfo.name} />
        <h2>{userInfo.name}</h2>
        <h3>TOTAL REPOS: {userInfo.public_repos}</h3>
        <h3>TOTAL FOLLOWERS: {userInfo.followers}</h3>
        <hr />
      </div>
    );
  }
}
