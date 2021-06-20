import React from "react";
import Loading from "./Loading";
import * as Location from "expo-location";
import { Alert } from "react-native";

class App extends React.Component {
  state = {
    isLoading: true,
  };
  myGetLocation = async () => {
    try {
      // throw Error();
      //1. first, 권한 요청하고 -- 이거때문에 try - catch 사용
      // const permissionR =
      await Location.requestForegroundPermissionsAsync();
      // console.log("[permission]" + permissionR);
      //2. second, 위치 받아오기

      /*
      const { coords } = await Location.getCurrentPositionAsync(); //https://docs.expo.io/versions/latest/sdk/location/
      console.log("[location]" + coords.latitude, coords.longitude); //여기서 내가 막 myLocation 변수선언해서 고생함 - es6 coords
      */

      const {
        coords: { latitude, longitude }, // Api 로 보내서 날짜를 받아올 파라미터
      } = await Location.getCurrentPositionAsync();

      this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };

  componentDidMount() {
    this.myGetLocation();
  }

  render() {
    const { isLoading } = this.state;
    if (isLoading) return <Loading></Loading>;
    else return null;
  }
}

export default App;
