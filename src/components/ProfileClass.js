import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    console.log("constructure");
    
    //used for class initlization
    super(props);
    //create state
    this.state = {
      count: 0,
      count2: 1, 
    };
  }
componentDidMount() { 
  // This is the best place to api call
  console.log("inside componentDidMount Render function");
}

  render() {
    const { count, count2 } = this.state;
    const { name } = this.props;
    console.log(this.props);
    return (
      <div>
       { console.log("Inside render function") }
        <h2>Profile - { name }</h2>
        <p>Count: { count }</p>
        <p>Count: { count2 }</p>
        <button onClick={() => {
          this.setState({
            count: count + 1,
            count2: count2 + 1
          })
        }}>Increment</button>
      </div>
    );
  }
}
export default ProfileClass;
