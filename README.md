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