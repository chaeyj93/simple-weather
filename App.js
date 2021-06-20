import React from "react";
import Loading from "./Loading";
import * as Location from "expo-location";
import { Alert } from "react-native";
import axios from "axios";

const API_KEY = "9f2e961120a7d1eab5534631e28bc476";

class App extends React.Component {
  state = {
    isLoading: true,
  };
  myGetWeather = async (lati, longi) => {
    const { data } = await axios.get(
      //axios 로 url에서 data 받아오는 거
      `http://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${API_KEY}` //백틱사용하고
    );
    console.log(data);
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
      this.myGetWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };

  componentDidMount() {
    this.myGetLocation();
  }

  render() {
    console.log("App render");
    const { isLoading } = this.state;
    if (isLoading) return <Loading></Loading>;
    else return null;
  }
}

export default App;
