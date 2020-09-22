import { affirmationData, weatherData } from './src/fetchStuff.ts'
import { temperatureConverter, updatedDate } from './src/helpers.ts'
import { learningList, projectsList } from './src/githubKanban.ts'

// Begin generating the readme
const readme = `
<h1 align="center">Hi 👋, I'm Vaibhav</h1>
<h3 align="center">a guy who builds highly resourceful and scalable experiences.</h3>

<p>currently living in hyderabad, india, learning and building useful tools (it's currently ${temperatureConverter(
  weatherData.main.temp
)}°F here).</p>

<p>i have ${learningList} on my bucket list.</p>

### i am working on:
${projectsList.map(item => `- ${item}`).join('\n')}

### every (once in a while), i write some blog posts at:
- [vaibhavkandwal.com/blog](https://vaibhavkandwal.com/blog/)
- [freecodecamp](https://www.freecodecamp.org/news/author/boxdox/)
- [medium](https://medium.com/@vaibhavkandwal)

### you can find me on:
- [twitter](https://twitter.com/vaibhav_kandwal)
- [linkedin](https://www.linkedin.com/in/vaibhavkandwal/)

### if you're looking to hire me:
- [my résumé](https://github.com/boxdox/resume/releases/latest/download/resume.pdf)

### here's my report card:

<p align="center">
<img src="https://github-readme-stats.vercel.app/api?username=boxdox&show_icons=true" />
</p>

### now since you made it this far, here's an affirmation of the day:
${affirmationData.affirmation.toLowerCase()}

<p align="center"><sub><em>last updated: ${updatedDate()}. updates daily.</em></sub></p>
`

Deno.writeTextFile('README.md', readme.trim())
