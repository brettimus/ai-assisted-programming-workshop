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

    // Render the title with figlet
    console.log(
      chalk.cyan(
        figlet.textSync(slide.title, {
          font: 'Standard',
          horizontalLayout: 'fitted',
          verticalLayout: 'default',
          width: 80,
          whitespaceBreak: true,
        })
      )
    );

    // Add a separator
    console.log(chalk.cyan('─'.repeat(process.stdout.columns || 80)));

    // Render the content
    for (const line of slide.content) {
      console.log(chalk.white(line));
    }

    // Add a separator
    console.log('\n');
    console.log(chalk.cyan('─'.repeat(process.stdout.columns || 80)));

    // Show slide number
    console.log(
      chalk.gray(`Slide ${this.currentSlideIndex + 1}/${this.presentation.slides.length}`)
    );

    // Show presenter notes if enabled
    if (this.showNotes && slide.notes) {
      console.log(chalk.yellow('\nPresenter Notes:'));
      for (const note of slide.notes) {
        console.log(chalk.yellow(`• ${note}`));
      }
    }
  }

  public start(): void {
    console.clear();
    this.renderSlide();
  }
}
