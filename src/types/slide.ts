export interface Slide {
  title: string;
  content: string[];
  notes?: string[];
}

export interface Presentation {
  title: string;
  author: string;
  slides: Slide[];
}
