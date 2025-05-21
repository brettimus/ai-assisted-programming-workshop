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

  private renderFancyTitle(title: string, terminalWidth: number): void {
    // Use figlet to create ASCII art title
    const figletText = figlet.textSync(title, {
      font: 'Standard',
      horizontalLayout: 'default',
      verticalLayout: 'default',
      width: Math.min(terminalWidth - 10, 100),
    });

    // Add some padding and color
    const lines = figletText.split('\n');
    console.log(); // Add some space above
    for (const line of lines) {
      console.log(chalk.cyan.bold(line));
    }
    console.log(); // Add some space below
  }

  private renderRegularTitle(title: string, terminalWidth: number): void {
    // Regular boxed title
    const titleBox = boxen(chalk.bold.cyan(title), {
      padding: 1,
      margin: { top: 1, bottom: 1, left: 2, right: 2 },
      borderStyle: 'round',
      borderColor: 'cyan',
      width: Math.min(terminalWidth - 8, 60),
      textAlignment: 'center',
    });

    console.log(titleBox);
  }

  public renderSlide(): void {
    // Clear the console
    console.clear();

    const slide = this.getCurrentSlide();
    const terminalWidth = process.stdout.columns || 80;
    const contentWidth = Math.min(terminalWidth - 10, 80); // Content area width
    const leftPadding = 4; // Left padding for content
    const paddingSpace = ' '.repeat(leftPadding);

    // Render the title according to style preference
    if (slide.isFancy) {
      this.renderFancyTitle(slide.title, terminalWidth);
    } else {
      this.renderRegularTitle(slide.title, terminalWidth);
    }

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
