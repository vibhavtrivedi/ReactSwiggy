import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
    };
    console.log("child constructor component");
  }

  componentDidMount() {
    console.log("child did mount");
  }
  render() {
    console.log("child render");
    const { name, designation } = this.props;
    const { count, count2 } = this.state;
    return (
      <div>
        <h3>I am {name}</h3>
        <h3>{designation}</h3>
        <h3>Count : {count}</h3>
        <h3>Count2: {count2}</h3>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 2,
            });
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}

export default User;
