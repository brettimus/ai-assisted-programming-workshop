# AI Assisted Programming Presentation

A terminal-based presentation tool for delivering slide decks directly in your terminal.

## Installation

Clone this repository and install dependencies:

```bash
git clone <repository-url>
cd ai-assisted-programming-workshop
pnpm install
```

## Usage

Build the project:

```bash
pnpm build
```

Start the presentation:

```bash
pnpm present
```

During development, you can use:

```bash
pnpm dev
```

### Command Line Options

- `-n, --notes`: Show presenter notes
- `-s, --slide <number>`: Start at a specific slide
- `-h, --help`: Display help information
- `-V, --version`: Display version information

### Keyboard Controls

- `Right Arrow` or `Space`: Next slide
- `Left Arrow`: Previous slide
- `n`: Toggle presenter notes
- `q`: Quit the presentation

## Customizing Slides

Edit the slides in `src/content/slides.ts` to customize the presentation content.

Each slide has the following structure:

```typescript
{
  title: 'Slide Title',
  content: [
    'Line 1',
    'Line 2',
    '• Bullet point'
  ],
  notes: [
    'Optional presenter notes',
    'Only visible when notes are enabled'
  ]
}
```

## License

ISC

## How this was made

This presentation was created with Claude Code on Wednesday morning. Here are the stats (including cost)

```
Total cost:            $2.48
Total duration (API):  15m 29.2s
Total duration (wall): 56m 54.1s
Total code changes:    785 lines added, 229 lines removed
Token usage by model:
    claude-3-5-haiku:  92.7k input, 2.8k output, 0 cache read, 0 cache write
   claude-3-7-sonnet:  133 input, 21.6k output, 3.7m cache read, 257.5k cache write
```

**NOTE** - The wall time is 1hr because I was doing other things while it was running, including a break for a meeting, and refreshing the slide history.

### Prompt History

```
  i am creating a web-hosted slide deck for a presentation to
  colleagues on ai assisted programming. please set up a typescript
   project that i can use to organize slides and then ultimately
  present them. i actually want to give the presentation in my
  terminal! so it should be a cli with shortcuts to advance to new
  slides.
```

```
  use pnpm instead of npm
```

```
  add linting and formatting with biome and remember to use them.
  then update CLAUDE.md
```

```
  okay now implement the actual slides i want. here is a bullet
  list of what i'll be talking about. make each slide minimal.
  corresponding to a single slide::: Why is this called
  AI-assisted-programming?
    - It's not vibecoding.
    - You are using the AI as an assistant for tasks you want to
  accomplish, but remaining firmly in the loop.
  - What we'll do
    - Go through a few pointers
    - Mies, Lau, Brett tell stories
    - You ask questions along the way
  - Pointers
    - Use AI a lot
    - Use lots of context
      - Few-shot using existing files
    - Use a powerful model
      - Don't trust autoselection of models (Cursor, Perplexity)
    - Keep track of what it's good at, re-evaluate when new models
  drop
    - For larger tasks
      - Separate planning and execution
        - Planning: Large model with "thinking"
      - Chunk the work and correct the AI along the way
  - Lau's Workflows
    - (Hand over to mies)
  - Mies' Workflows
    - (Hand over to mies)
  - Brett's workflows
    - Review
      - Blog posts
    - Scripts / Grunt work
      - Example: filetree
      - Example: [Ghostty](https://chatgpt.com/share/682d7ff5-efcc-
  8009-b6b2-d814656d9c2f) theme switcher
    - Debugging
      - Story: HONCpiler
    - Small Feature
      - Story: Credential management for spectacular
    - Medium Feature
      - Story: Zip file download of project files, as well as R2
  script to upload them
        - Most of *my* work was making it clear what was happening,
   and documenting next steps in Linear
    - Big-ish Feature
      - Story: Deployments
    - Surprise
      - This was written with Claude Code
```

```
  okay figlet makes the slide title text hard to read - make it either smaller or more legible somehow
```

```
  let's add some padding to the slide body contents - right now they are very left-aligned, i would like some
  breathing room
```

```
  update CLAUDE.md with style guidelines that match the biome config, and make sure that biome makes fixes when
   you lint and format
```

```
  add an optional property to the slides - isFancy - which, if present and true, uses figlet to render the
  title. then make the first slide and the surprise slide fancy
```

```
  /cost
``` 