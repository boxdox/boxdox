import { temperature, affirmation, today, learningList, projectsList } from './src/fetchStuff.ts'

// Begin generating the readme
const readme = `
<h1 align="center">Hi 👋, I'm Vaibhav</h1>
<h3 align="center">a guy who builds highly resourceful, performant and scalable experiences.</h3>

<p>currently living in bengaluru, india, learning and building useful tools (it's currently ${temperature}°F here).</p>

<p>i have ${learningList} on my bucket list.</p>

### i am working on:
${projectsList}

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
${affirmation.toLowerCase()}

<p align="center"><sub><em>last updated: ${today}. updates daily.</em></sub></p>
`

Deno.writeTextFile('README.md', readme.trim())
