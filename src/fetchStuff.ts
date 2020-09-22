import { AffirmationResponse, openWeatherResponse } from './interface.ts'

const fetcher = async (url: string, headers: RequestInit = {}) => {
  try {
    const req = await fetch(url, headers)
    const data = await req.json()
    return data
  } catch (error) {
    console.log(error)
    throw new Error('Fetch failed')
  }
}

const AFFIRMATION_API: string = 'https://www.affirmations.dev/'
const WEATHER_API: string = `https://api.openweathermap.org/data/2.5/weather?id=1269843&appid=${
  Deno.env.toObject()['WeatherAPIKey']
}`

const affirmationData: AffirmationResponse = await fetcher(AFFIRMATION_API)
const weatherData: openWeatherResponse = await fetcher(WEATHER_API)

export { fetcher, affirmationData, weatherData }
