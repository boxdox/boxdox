export const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?id=1269843&appid=${
  Deno.env.toObject()['WeatherAPIKey']
}`

export const GITHUB_HEADERS = {
  headers: {
    Accept: 'application/vnd.github.inertia-preview+json',
    Authorization: `token ${Deno.env.toObject()['GithubToken']}`,
  },
}
export const GITHUB_API_LEARNING_LIST = 'https://api.github.com/projects/columns/10882515/cards'
export const GITHUB_API_PROJECTS_LIST = 'https://api.github.com/projects/columns/10882516/cards'
