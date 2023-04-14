import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    console.log("Child constructure");

    //used for class initlization
    super(props);
    //create state
    this.state = {
      userInfo: {
        name: "Amarpreet Singh",
        location: "Canada",
      },
    };
  }
  async componentDidMount() {

   

    //This is the best place to api call
    
  }

  componentDidUpdate() {
    console.log("Component did update");
  }

  componentWillUnmount() {
    console.log("Component will Unmount");
    
  }

  render() {
    console.log("Child Render");
   

    return (
      <div>
      
      </div>
    );
  }
}
export default ProfileClass;
