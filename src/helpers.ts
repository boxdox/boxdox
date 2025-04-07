export const fetcher = async <T = unknown>(
  url: string,
  headers: RequestInit = {}
): Promise<T> => {
  try {
    const req = await fetch(url, headers)
    const data = await req.json()
    return data as T
  } catch (error) {
    console.error(error)
    throw new Error('Fetch failed')
  }
}

export const safeParseJson = <T extends unknown>(
  json: string,
  defaultValue: T
): T => {
  try {
    return JSON.parse(json) as T
  } catch {
    return defaultValue
  }
}

export const temperatureConverter = (temperature: number): string => {
  return (((temperature - 273.15) * 9) / 5 + 32).toFixed(2)
}

export const today = () => {
  const today: Date = new Date()
  const monthArr: string[] = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december',
  ]

  const day: number = today.getDate()
  const month: number = today.getMonth()
  const year: number = today.getFullYear()

  return `${monthArr[month]} ${day}, ${year}`
}
