export interface IOpenWeatherResponse {
  coord: {
    lon: number
    lat: number
  }
  weather: {
    id: number
    main: string
    description: string
    icon: string
  }[]
  base: string
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  }
  visibility: number
  wind: {
    speed: number
    deg: number
  }
  clouds: {
    all: number
  }
  dt: number
  sys: {
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
  }
  timezone: number
  id: number
  name: string
  cod: number
}

export interface IGithubGist {
  url: string
  forks_url: string
  commits_url: string
  id: string
  node_id: string
  git_pull_url: string
  git_push_url: string
  html_url: string
  files: Record<
    string,
    {
      filename: string
      type: string
      language: string
      raw_url: string
      size: number
      truncated: boolean
      content: string
      encoding: string
    }
  >
  public: boolean
  created_at: string
  updated_at: string
  description: string
  comments: number
  user: any
  comments_enabled: boolean
  comments_url: string
  owner: any
  forks: any[]
  history: any
  truncated: boolean
}

export type ProfileData = Record<'learning' | 'projects', Array<String>>
