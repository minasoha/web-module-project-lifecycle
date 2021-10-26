import React from "react";

export default class Follower extends React.Component {
  render() {
    const { followers } = this.props;

    return (
      <div className="user-card">
        <div>
          {followers.map((user, idx) => {
            return (
              <div>
                <img
                  width="200"
                  key={idx}
                  src={user.avatar_url}
                  alt={user.login}
                />
                <h4 key={idx}>{user.login}</h4>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
