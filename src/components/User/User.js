import React from "react";
import './User.css';
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
          location : "Default"
        }
    };
    console.log("child constructor component");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/vibhavtrivedi");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo : json,
    })
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }
  render() {
    const { name, designation } = this.props;
    const { location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-data">
        <img alt="user profile" src={avatar_url} />
        <h3>I am {name}</h3>
        <h3>{designation}</h3>
        <h3>{location }</h3>
      </div>
    );
  }
}

export default User;
