import Input from "./components/input/index.jsx";
import Button from "./components/button/index.jsx";
import CardPrincipal from "./components/card-principal/index.jsx";
import CardInfo from "./components/card-info/index.jsx";

import { GlobalStyle, Container, SecondaryDiv, CardSecundario, NameCity } from "./style.js";

import { FaLocationDot, FaTemperatureHigh, FaTemperatureLow, FaDroplet, FaWind } from "react-icons/fa6";

import api from "./services/api.js";

import { useState } from "react";

function App() {
  
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setError(null);
    setWeatherData(null);

    try {
      const response = await api.get(`?q=${encodeURI(cityName)}&appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=pt_br`);
      setWeatherData(response.data);
    } catch (error) {
      setError('Cidade não encontrada.'); 
    }
  }

  return (
    <>
    <Container>
      <GlobalStyle />

      <SecondaryDiv>
        {<FaLocationDot />}
        <Input value={cityName} onChange={(e) => setCityName(e.target.value)} placeholder={'Buscar cidade'}/>
        <Button onClick={handleSearch} />
      </SecondaryDiv>

      {error && (<p>{error}</p>)}

      {weatherData && (
        <>
        <NameCity>{weatherData.name}, {weatherData.sys.country}</NameCity>

        <CardPrincipal 
          img={weatherData.weather[0].icon}
          graus={weatherData.main?.temp}
          condicoes={weatherData.weather[0].description}
        />

        <CardSecundario>
          <CardInfo icone={<FaTemperatureHigh/>} info={'Temp. max'} temp={weatherData.main.temp_max} unidade={'c°'}/>
          <CardInfo icone={<FaTemperatureLow/>} info={'Temp. min'} temp={weatherData.main.temp_min} unidade={'c°'}/>
          <CardInfo icone={<FaDroplet/>} info={'Humidade'} temp={weatherData.main.humidity} unidade={'%'}/>
          <CardInfo icone={<FaWind/>} info={'Vento'} temp={weatherData.wind.speed} unidade={'Km/h'}/>
        </CardSecundario>
        </>)}
    </Container>
    </>
  );
}

export default App;
