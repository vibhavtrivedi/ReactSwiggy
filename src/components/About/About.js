import React from "react";
import User from "../User/User";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }
  componentDidMount() {
    console.log("parent did mount");
  }
  render() {
    console.log("Parent Render Component");
    return (
      <div>
        <div>
          <User name={"vibhav"} designation={"Software Engineer"} />
        </div>
      </div>
    );
  }
}

export default About;
