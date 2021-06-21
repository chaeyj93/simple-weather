import React from "react";
import Loading from "./Loading";
import Weather from "./Weather";
import * as Location from "expo-location";
import { Alert } from "react-native";
import axios from "axios";

const API_KEY = "9f2e961120a7d1eab5534631e28bc476";

class App extends React.Component {
  state = {
    isLoading: true, //더 안하는데 어떻게 읽네?
    condition: "",
    temp: 0,
  };
  myGetWeather = async (lati, longi) => {
    const {
      data: {
        main: { temp },
        weather,
      },
    } = await axios.get(
      //axios 로 url에서 data 받아오는 거
      `http://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${API_KEY}&units=metric` //백틱사용하고
    );
    console.log(weather[0].main); //이거 계속 data 로 놔뒀다가 에러 엄청 났음 - es6
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp,
    });
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
    const { isLoading, temp, condition } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={Math.round(temp)} condition={condition} />
    );
  }
}

export default App;
