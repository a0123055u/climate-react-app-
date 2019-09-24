import React from "react";
import Titles from "./components/Titles";
import Forms from"./components/Forms";
import Weather from"./components/Weather";
import FileUpload from"./components/FileUpload";

import BackGround from"./components/BackGround";
import 'jquery/src/jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

// import { ImageBackground, Text } from 'react-native';

const api_key = "a8f77e1f023b4ff1ac1737309dcd3a86";
class App extends React.Component {
state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description:undefined,
    error: undefined,


 }
//  onChangeHandler = event =>{

//     console.log(event.target.files[0])

// }

getWeather = async (e) =>{
  e.preventDefault();
  const city = e.target.elements.city.value;
  const country = e.target.elements.country.value;

  
  if(city && country){
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${api_key}`);
    const data = await api_call.json();
    console.log(data);
      this.setState({
        temperature: data.main?data.main.temp/10:undefined,
        city: data.name,
        country: data.sys?data.sys.country:undefined,
        humidity: data.main?data.main.humidity:undefined,
        description:data.weather?data.weather[0].description:undefined,
        error: !(this.state.temperature || this.state.country || this.state.humidity || this.state.description)?(data.message?data.message+"! and country not Found !":""):''
    });
  }  else{
      this.setState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description:undefined,
      error: 'Please enter the values',
    });
  }

}

  render(){
    return (
      <div >
      <BackGround >
       <Titles />
       <Forms getWeather = {this.getWeather}/>
        <Weather temperature = {this.state.temperature}
                city = {this.state.city}
                country = {this.state.country}
                humidity = {this.state.humidity}
                description = {this.state.description}
                error = {this.state.error}
       />
       <FileUpload></FileUpload>
      </BackGround>
     
      

    </div>
    );

  }
};

export default App;