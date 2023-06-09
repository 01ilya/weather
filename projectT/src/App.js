import React, { useState } from 'react'
import axios from 'axios'




function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="relative w-[100%] h-screen bg-[url('./assets/sunset.jpg')] bg-no-repeat bg-center bg-cover text-white " >

      
      <div className="text-center p-5">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text"
          className=' pl-5 pt-3 pr-7 text-sm rounded-3xl border-t border-solid  bg-stone-500 text-white'
           />
      </div>
      <div className="max-w-[700px] h-[700px] m-auto py-0 px-[4rem] relative top-[10%]  flex-col flex 2justify-beetween ">
        <div className="w-[100%] my-0 mr-auto">
          <div className="location">
            <p className='text-base'>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1 className='text-8xl'>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          
        </div>

        {data.name !== undefined &&
          <div className="flex justify-evenly text-center w-full my-0 mr-auto p-4 rounded-xl bg-inherit">
            <div className="feels">
              {data.main ? <p className='font-bold text-base'>{data.main.feels_like.toFixed()}°F</p> : null}
              <p className='text-base'>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='font-bold text-base'>{data.main.humidity}%</p> : null}
              <p className='text-base'>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='font-bold text-base'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p className='text-base'>Wind Speed</p>
            </div>
          </div>
        }



      </div>
    </div>
  );
}

export default App;
