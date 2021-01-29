import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';

import {getWeatherByCityName} from '../services/index';
import SearchCity from './HomeComponents/SearchCity';
import List from './HomeComponents/List';

export const HomeScreen = () => {
  const [city, setCity] = useState('Copenhagen');
  const [cityWeather, setCityWeather] = useState({});
  const [sunRise, setSunRise] = useState('');
  const [sunSet, setSunSet] = useState('');

  const searchCity = (text) => {
    setCity(text);
  };

  useEffect(() => {
    (async () => {
      try {
        const weather = await getWeatherByCityName(city);
        console.log(weather);
        setCityWeather(weather);
        setSunRise(
          new Date((weather?.sys?.sunrise + weather?.timezone) * 1000)
            .toISOString()
            .substr(11, 5),
        );
        setSunSet(
          new Date((weather?.sys?.sunset + weather?.timezone) * 1000)
            .toISOString()
            .substr(11, 5),
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, [city]);

  const handleDateTime = () => {
    let tzoffset = new Date().getTimezoneOffset() * 60 * 1000;

    let currentDateTime = new Date(
      Date.now() + tzoffset + cityWeather?.timezone * 1000,
    );

    let getDate = currentDateTime.toDateString();

    let timeString = `${currentDateTime
      .getHours()
      .toString()
      .padStart(2, '0')}:${currentDateTime
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;
    return (
      <View style={styles.dateTimeView}>
        <Text style={styles.cityDateTime}>{getDate}</Text>
        <Text style={styles.cityDateTime}>{timeString}</Text>
      </View>
    );
  };

  const backgroundImage = require('../../assets/background.jpg');

  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.image}>
        <SearchCity searchCity={searchCity} />

        {handleDateTime()}
        <View style={styles.weatherImgView}>
          <Image
            source={{
              uri: `http://openweathermap.org/img/wn/${cityWeather?.weather?.[0]?.icon}@2x.png`,
            }}
            style={styles.weatherImg}
          />
        </View>
        <Text style={styles.weatherDes}>
          {cityWeather?.weather?.[0]?.description
            .split(' ')
            .map((w) => w[0].toUpperCase() + w.substr(1).toLowerCase())
            .join(' ')}
        </Text>

        <View style={styles.citytempView}>
          <Text style={styles.cityTemp}>
            {Math.round(parseFloat(cityWeather?.main?.temp))}
          </Text>
          <Text style={styles.celcius}>℃</Text>
        </View>

        {/* <Text style={styles.cityTemp}> {Math.round(parseFloat(cityWeather?.main?.temp))}℃</Text> */}

        <List
          allRowMembers={[
            {
              measureName: 'Feels Like',
              measureValue: `${Math.round(
                parseFloat(cityWeather?.main?.feels_like),
              )} °C`,
              measureIcon: 'thermometer',
            },
            {
              measureName: 'Humidity',
              measureValue: `${cityWeather?.main?.humidity} %`,
              measureIcon: 'droplet',
            },
            {
              measureName: 'Pressure',
              measureValue: `${cityWeather?.main?.pressure} hPa`,
              measureIcon: 'compass',
            },
            {
              measureName: 'Wind Speed',
              measureValue: `${cityWeather?.wind?.speed} m/s`,
              measureIcon: 'wind',
            },
            {
              measureName: 'Sunrise',
              measureValue: `${sunRise}`,
              measureIcon: 'sunrise',
            },
            {
              measureName: 'Sunset',
              measureValue: `${sunSet}`,
              measureIcon: 'sunset',
            },
          ]}
          noCols={3}
        />
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dateTimeView: {
    alignItems: 'center',
  },
  cityDateTime: {
    color: '#232385',
    
    fontSize: 17,
    textAlign: 'center',
    alignItems: 'center',
  },
  citytempView: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingTop: 10,
  },
  celcius: {
    fontSize: 40,
    color: '#232363',
  },
  cityTemp: {
    color: '#232363',
    fontSize: 80,
    textAlign: 'center',
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-start',
  },
  weatherImgView: {
    height: 190,
    justifyContent:'center',
  },

  weatherImg: {
    height: 300,
    resizeMode: 'contain',
  },
  weatherDes: {
    color: '#fcfafa',
    fontSize: 22,
    textAlign: 'center',
  },
});