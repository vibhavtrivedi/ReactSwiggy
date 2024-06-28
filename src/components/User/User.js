import React from "react";

class User extends React.Component {
    constructor(props) {
        super(props);
        console.log("props", this.props);
    }
    render() {
        console.log("props", this.props);
        const { name, designation } = this.props;
        return (
            <div>
                <h3>I am {name }</h3>
                <h3>{ designation}</h3>
            </div>
        )
    }
}

export default User;