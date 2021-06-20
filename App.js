import React from "react";
import Loading from "./Loading";
import * as Location from "expo-location";

class App extends React.Component {
  myGetLocation = async () => {
    const location = await Location.getCurrentPositionAsync({}); //https://docs.expo.io/versions/latest/sdk/location/
    console.log(location);
  };

  componentDidMount() {
    this.myGetLocation();
  }

  render() {
    return <Loading></Loading>;
  }
}

export default App;
