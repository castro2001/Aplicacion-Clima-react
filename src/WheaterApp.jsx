import { useState } from "react"

export const WheaterApp = () => {
    const urlBase= "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY='64d1123eb11f0c235b73d5d60f94c83f';
    const difKelvin = 273.15;

    const[city, setCity]=useState('?q={city name}&appid={API key}');
    const[dataClima, setDataClima]=useState(null);


    const handleChangeCity = (e)=>{
        setCity(e.target.value)
    }
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    const fetchClima = async ()=>{
        const response = await fetch(`${urlBase}?q=${city}&appid=${API_KEY}`);
        const data = await response.json();
        setDataClima(data)

        
    }

    const handleSubmit = (e)=>{
            e.preventDefault()
            console.log();
            if(city.length > 0)
            fetchClima();
        }

  return (
  <div className="container">
    <h1>Aplicacion del Clima</h1>
    <form onSubmit={handleSubmit} method="post">
        <input 
        type="text" 
        name="ciudad"
        placeholder="Ingrese una ciudad  como: Buenos Aires"
        onChange={handleChangeCity} 
        id=""
        />
    
        <button type="submit">Buscar</button> 
    </form>

    {
        dataClima && (
            <div className="box">
                <h2>{dataClima.name}</h2>
                <p>Temperatura: {parseInt(dataClima?.main?.temp - difKelvin)}º </p>
                <p>Condicion Meterologica: {dataClima.weather[0].description}</p>
                <img src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`} alt="" />
            </div>
        )
    }
  </div>


  )
}
