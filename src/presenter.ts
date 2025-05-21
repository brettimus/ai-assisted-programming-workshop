import boxen from 'boxen';
import chalk from 'chalk';
import figlet from 'figlet';
import type { Presentation, Slide } from './types/slide.js';

export class Presenter {
  private presentation: Presentation;
  private currentSlideIndex = 0;
  private showNotes = false;

  constructor(presentation: Presentation) {
    this.presentation = presentation;
  }

  public getCurrentSlide(): Slide {
    return this.presentation.slides[this.currentSlideIndex];
  }

  public nextSlide(): boolean {
    if (this.currentSlideIndex < this.presentation.slides.length - 1) {
      this.currentSlideIndex++;
      return true;
    }
    return false;
  }

  public previousSlide(): boolean {
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
      return true;
    }
    return false;
  }

  public toggleNotes(): void {
    this.showNotes = !this.showNotes;
  }

  public renderSlide(): void {
    // Clear the console
    console.clear();

    const slide = this.getCurrentSlide();
    const terminalWidth = process.stdout.columns || 80;
    const contentWidth = Math.min(terminalWidth - 10, 80); // Content area width
    const leftPadding = 4; // Left padding for content
    const paddingSpace = ' '.repeat(leftPadding);

    // Render the title - simpler, more readable approach
    const titleBox = boxen(chalk.bold.cyan(slide.title), {
      padding: 1,
      margin: { top: 1, bottom: 1, left: 2, right: 2 },
      borderStyle: 'round',
      borderColor: 'cyan',
      width: Math.min(terminalWidth - 8, 60),
      textAlignment: 'center',
    });

    console.log(titleBox);

    // Add a separator
    console.log(chalk.cyan('─'.repeat(terminalWidth)));
    console.log(); // Add vertical spacing

    // Render the content with left padding
    for (const line of slide.content) {
      console.log(paddingSpace + chalk.white(line));
    }

    console.log(); // Add vertical spacing

    // Add a separator
    console.log(chalk.cyan('─'.repeat(terminalWidth)));

    // Show slide number
    console.log(
      chalk.gray(`Slide ${this.currentSlideIndex + 1}/${this.presentation.slides.length}`)
    );

    // Show presenter notes if enabled
    if (this.showNotes && slide.notes) {
      console.log(chalk.yellow('\nPresenter Notes:'));
      for (const note of slide.notes) {
        console.log(chalk.yellow(`${paddingSpace}• ${note}`));
      }
    }
  }

  public start(): void {
    console.clear();
    this.renderSlide();
  }
}
