export interface Slide {
  title: string;
  content: string[];
  notes?: string[];
  isFancy?: boolean;
}

export interface Presentation {
  title: string;
  author: string;
  slides: Slide[];
}
