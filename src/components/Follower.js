import React from "react";

export default class Follower extends React.Component {
  render() {
    const { followers } = this.props;
    console.log(followers);
    return (
      <div>
        <div key={followers.id}>
          {followers.map((user, idx) => {
            return (
              <>
                <img width="200" key={idx} src={user.avatar_url} />
                <h4 key={idx}>{user.login}</h4>
              </>
            );
          })}
        </div>
      </div>
    );
  }
}
