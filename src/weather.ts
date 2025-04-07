import { fetcher, temperatureConverter } from './helpers'
import { type IOpenWeatherResponse } from './types'

const weatherCityId = `1277333`
const apiKey = Bun.env.WeatherAPIKey
const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?id=${weatherCityId}&appid=${apiKey}`

export const getCurrentTemperature = async (): Promise<string> => {
  const weatherData = await fetcher<IOpenWeatherResponse>(WEATHER_API)
  return temperatureConverter(weatherData.main.temp)
}
