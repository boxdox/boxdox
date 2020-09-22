import { fetcher } from './fetchStuff.ts'
import { githubCards } from './interface.ts'

const GITHUB_API_LEARNING_LIST: string = 'https://api.github.com/projects/columns/10882515/cards'
const GITHUB_API_PROJECTS_LIST: string = 'https://api.github.com/projects/columns/10882516/cards'
const GITHUB_HEADERS = {
  headers: {
    Accept: 'application/vnd.github.inertia-preview+json',
    Authorization: `token ${Deno.env.toObject()['GithubToken']}`,
  },
}

const learningData: githubCards[] = await fetcher(GITHUB_API_LEARNING_LIST, GITHUB_HEADERS)
const projectsData: githubCards[] = await fetcher(GITHUB_API_PROJECTS_LIST, GITHUB_HEADERS)

// Join the list of items as `a, b, c and d`
const learningList = learningData
  .map(({ note }) => note)
  .reduce((a, b, i, arr) => (i <= arr.length - 2 ? `${a}, ${b}` : `${a} and ${b}`))

const projectsList = projectsData.map(({ note }) => note)

export { learningList, projectsList }
