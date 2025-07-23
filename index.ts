import { today } from './src/helpers.ts'
import { getCurrentTemperature } from './src/weather.ts'
import { fetchFromGithub } from './src/github.ts'
import { getRandomAffirmation } from './src/affirmations.ts'

const githubResponse = await fetchFromGithub()

if (!githubResponse) {
  console.error('script failed')
  process.exit(1)
}

// Begin generating the readme
const readme = `
<h1 align="center">Hi 👋, I'm Vaibhav</h1>
<h3 align="center">a guy who builds highly resourceful, performant and scalable experiences.</h3>

<p>currently living in bengaluru, india, learning and building useful tools (it's currently ${await getCurrentTemperature()}°F here).</p>

<p>i have ${githubResponse.learning} on my bucket list.</p>

### i am working on:
${githubResponse.projects}

### every (once in a while), i write some blog posts at:
- [boxdox.dev/blog](https://boxdox.dev/blog/)
- [freecodecamp](https://www.freecodecamp.org/news/author/boxdox/)
- [medium](https://medium.com/@vaibhavkandwal)

### you can find me on:
- [twitter](https://twitter.com/vaibhav_kandwal)
- [linkedin](https://www.linkedin.com/in/vaibhavkandwal/)

### if you want to support me:
<a href="https://www.buymeacoffee.com/boxdox" target="_blank" rel="noopener noreferrer">
  <img src="assets/buy-coffee.png" width="200" alt="buy me a coffee" />
</a>

### if you're looking to hire me:
- [my résumé](https://github.com/boxdox/resume/releases/latest/download/resume.pdf)

### here's my report card:

<p align="center">
<img src="https://github-readme-stats.vercel.app/api?username=boxdox&show_icons=true&count_private=true&theme=dracula" />
</p>

### now since you made it this far, here's an affirmation of the day:
${getRandomAffirmation().toLowerCase()}

<p align="center"><sub><em>last updated: ${today()}. updates daily.</em></sub></p>
`

await Bun.write('README.md', readme.trim())
