import React from "react";
import User from "../User/user";


class About extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  render() {

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
