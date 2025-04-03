import { getRandomAffirmation } from './affirmations.ts'
import { fetcher, temperatureConverter, updatedDate } from './helpers.ts'
import {
  GITHUB_API_LEARNING_LIST,
  GITHUB_API_PROJECTS_LIST,
  GITHUB_HEADERS,
  WEATHER_API,
} from './constants.ts'
import type { IGithubCard, IOpenWeatherResponse } from './interface.ts'

// affirmation
export const affirmation = getRandomAffirmation()

// weather
const weatherData = await fetcher<IOpenWeatherResponse>(WEATHER_API)
export const temperature = temperatureConverter(weatherData.main.temp)

// github api
const learningData = await fetcher<IGithubCard[]>(GITHUB_API_LEARNING_LIST, GITHUB_HEADERS)
const projectsData = await fetcher<IGithubCard[]>(GITHUB_API_PROJECTS_LIST, GITHUB_HEADERS)

// Join the list of items as `a, b, c and d`
export const learningList = (learningData ?? [])
  .map(({ note }) => note)
  .reduce((a, b, i, arr) => (i <= arr.length - 2 ? `${a}, ${b}` : `${a} and ${b}`))

export const projectsList = (projectsData ?? []).map(({ note }) => `- ${note}`).join('\n')

export const today = updatedDate()
