# Claude Code Assistant Configuration

This file contains commands and information to help Claude Code provide better assistance for this project.

## Build Commands

```
pnpm build
```

## Run Commands

```
pnpm dev      # Development mode with hot reloading
pnpm start    # Run the built application
pnpm present  # Run the presentation
```

## Linting and Formatting Commands

```
pnpm lint     # Run Biome linter (auto-fixes linting issues)
pnpm format   # Format code with Biome (auto-fixes formatting issues)
pnpm check    # Check code with Biome without making changes (lint + format)
pnpm fix      # Fix code with Biome (auto-fixes linting and formatting issues)
```

## Style Guidelines

This project uses [Biome](https://biomejs.dev/) for linting and formatting with the following configuration:

### Formatting
- Indent: 2 spaces
- Line width: 100 characters maximum
- Quotes: Single quotes for strings
- Trailing commas: ES5 style (commas for multiline arrays and objects)
- Semicolons: Required at the end of statements

### Import Organization
- Imports are automatically sorted alphabetically
- Type imports use the `import type` syntax

### Code Style
- Prefer `for...of` loops over `forEach`
- Use Node.js protocol imports (`node:` prefix) for built-in modules
- Use inferrable types (no explicit type annotations for variables with initializers)
- Use TypeScript for all new code

## Project Structure

- `src/types/` - Type definitions
- `src/content/` - Slide content
- `src/presenter.ts` - Slide presentation logic
- `src/index.ts` - Main application entry point

## How to Add or Modify Slides

Edit the `presentation` object in `src/content/slides.ts` to:
- Update existing slides
- Add new slides
- Modify presenter notes

Each slide follows this structure:
```typescript
{
  title: 'Slide Title',
  content: [
    '• Bullet point 1',
    '', // Empty line for spacing
    '• Bullet point 2'
  ],
  notes: [
    'Presenter notes to help remember talking points',
    'Will only be displayed when notes mode is active'
  ]
}
```