#!/usr/bin/env node
import readline from 'node:readline';
import { program } from 'commander';
import { presentation } from './content/slides.js';
import { Presenter } from './presenter.js';

// Set up command line interface
program
  .name('present')
  .description('Terminal-based presentation tool for AI Assisted Programming')
  .version('1.0.0')
  .option('-n, --notes', 'Show presenter notes', false)
  .option('-s, --slide <number>', 'Start at a specific slide', '1')
  .parse(process.argv);

const options = program.opts();

// Initialize the presenter
const presenter = new Presenter(presentation);

// Start at specified slide if provided
const startSlide = Number.parseInt(options.slide);
if (startSlide > 1) {
  for (let i = 1; i < startSlide; i++) {
    presenter.nextSlide();
  }
}

// Show notes if specified
if (options.notes) {
  presenter.toggleNotes();
}

// Start the presentation
presenter.start();

// Set up key handling
readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY) {
  process.stdin.setRawMode(true);
}

process.stdin.on('keypress', (_, key) => {
  if (key) {
    // Exit on 'q' or ctrl+c
    if (key.name === 'q' || (key.ctrl && key.name === 'c')) {
      console.clear();
      process.exit();
    }

    // Next slide on right arrow or space
    if (key.name === 'right' || key.name === 'space') {
      if (presenter.nextSlide()) {
        presenter.renderSlide();
      }
    }

    // Previous slide on left arrow
    if (key.name === 'left') {
      if (presenter.previousSlide()) {
        presenter.renderSlide();
      }
    }

    // Toggle notes on 'n'
    if (key.name === 'n') {
      presenter.toggleNotes();
      presenter.renderSlide();
    }
  }
});

console.log('Press right arrow or space to advance, left arrow to go back, n for notes, q to quit');
