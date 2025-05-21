# Claude Code Assistant Configuration

This file contains commands and information to help Claude Code provide better assistance for this project.

## Build Commands

```
pnpm build
```

## Run Commands

```
pnpm dev    # Development mode with hot reloading
pnpm start  # Run the built application
pnpm present # Run the presentation
```

## Linting and Formatting Commands

```
pnpm lint    # Run Biome linter
pnpm format  # Format code with Biome
pnpm check   # Check code with Biome (lint + format)
pnpm fix     # Fix code with Biome (lint + format)
```

## Project Structure

- `src/types/` - Type definitions
- `src/content/` - Slide content
- `src/presenter.ts` - Slide presentation logic
- `src/index.ts` - Main application entry point