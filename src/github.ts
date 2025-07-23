import { fetcher, safeParseJson } from './helpers'
import type { IGithubGist, ProfileData } from './types'

const GIST_ID = `897cbc59e5165a1314b555a9c52a3a7a`
const FILE_NAME = `profile-data.json`

export const fetchFromGithub = async () => {
  try {
    const data = await fetcher<IGithubGist>(
      `https://api.github.com/gists/${GIST_ID}`,
      {
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `token ${Bun.env.GithubToken}`,
        },
      }
    )
    const profileData = safeParseJson<ProfileData>(
      data?.files[FILE_NAME]?.content ?? '',
      {
        learning: [],
        projects: [],
      }
    )

    return {
      learning: profileData.learning.reduce((a, b, i, arr) =>
        i <= arr.length - 2 ? `${a}, ${b}` : `${a} and ${b}`
      ),
      projects: profileData.projects.map(project => `- ${project}`).join('\n'),
    }
  } catch (e) {
    console.error('error during github fetch', e)
  }
}
