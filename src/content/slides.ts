import type { Presentation } from '../types/slide.js';

export const presentation: Presentation = {
  title: 'AI-Assisted Programming',
  author: 'Brett Beutell',
  slides: [
    {
      title: 'AI-Assisted Programming',
      content: [
        'A workshop on effective collaboration with AI',
        '',
        'Press → or SPACE to advance',
        'Press ← to go back',
        'Press Q to quit',
      ],
      notes: [
        'Welcome everyone to our workshop on AI-assisted programming',
      ],
    },
    {
      title: 'Why AI-Assisted Programming?',
      content: [
        '• It\'s not vibecoding',
        '',
        '• Using AI as an assistant for specific tasks',
        '',
        '• You remain firmly in the loop',
      ],
      notes: [
        'Important distinction: We\'re not just vibing with AI',
        'This is purposeful collaboration where you maintain control',
      ],
    },
    {
      title: 'Today\'s Agenda',
      content: [
        '• Go through a few pointers',
        '',
        '• Mies, Lau, Brett tell stories',
        '',
        '• You ask questions along the way',
      ],
      notes: [
        'Interactive session with real-world examples',
        'Please ask questions at any point',
      ],
    },
    {
      title: 'Pointers: Use AI a Lot',
      content: [
        '• Practice makes perfect',
        '',
        '• Build intuition about capabilities and limitations',
        '',
        '• Develop your personal workflows',
      ],
      notes: [
        'The more you use AI, the better you get at working with it',
        'You\'ll learn what tasks it excels at and where it struggles',
      ],
    },
    {
      title: 'Pointers: Use Lots of Context',
      content: [
        '• Few-shot examples using existing files',
        '',
        '• Show patterns you want followed',
        '',
        '• Be explicit about project conventions',
      ],
      notes: [
        'AI performs better with clear examples',
        'Show don\'t tell - provide existing code as reference',
      ],
    },
    {
      title: 'Pointers: Use a Powerful Model',
      content: [
        '• Don\'t trust autoselection of models',
        '',
        '• Cursor, Perplexity often downgrade unnecessarily',
        '',
        '• Latest models typically have best capabilities',
      ],
      notes: [
        'Model quality matters significantly for complex tasks',
        'Be aware that tools may default to less capable models',
      ],
    },
    {
      title: 'Pointers: Track Capabilities',
      content: [
        '• Keep track of what it\'s good at',
        '',
        '• Re-evaluate when new models are released',
        '',
        '• Share findings with colleagues',
      ],
      notes: [
        'AI capabilities evolve rapidly with new model versions',
        'What was impossible 3 months ago might be easy now',
      ],
    },
    {
      title: 'Pointers: Larger Tasks',
      content: [
        '• Separate planning and execution',
        '',
        '• Planning: Large model with "thinking"',
        '',
        '• Chunk the work and correct along the way',
      ],
      notes: [
        'Breaking down complex tasks is crucial',
        'Provide feedback at each step to keep the AI on track',
      ],
    },
    {
      title: 'Lau\'s Workflows',
      content: [
        '...',
        '',
        '',
        '',
        '(Hand over to Lau)',
      ],
      notes: [
        'Introduce Lau',
        'Transition to their examples and stories',
      ],
    },
    {
      title: 'Mies\' Workflows',
      content: [
        '...',
        '',
        '',
        '',
        '(Hand over to Mies)',
      ],
      notes: [
        'Introduce Mies',
        'Transition to their examples and stories',
      ],
    },
    {
      title: 'Brett\'s Workflows: Review',
      content: [
        '• Blog posts',
        '',
        '• Documentation',
        '',
        '• Pull requests',
      ],
      notes: [
        'AI can help with reviewing and improving written content',
        'Examples of how I use AI for editing and feedback',
      ],
    },
    {
      title: 'Brett\'s Workflows: Scripts',
      content: [
        '• Example: filetree generator',
        '',
        '• Example: Ghostty theme switcher',
        '',
        '• Automating repetitive tasks',
      ],
      notes: [
        'AI excels at generating utility scripts',
        'Link to Ghostty example: https://chatgpt.com/share/682d7ff5-efcc-8009-b6b2-d814656d9c2f',
      ],
    },
    {
      title: 'Brett\'s Workflows: Debugging',
      content: [
        '• Story: HONCpiler',
        '',
        '• Error analysis',
        '',
        '• Suggesting fixes',
      ],
      notes: [
        'Share the HONCpiler debugging experience',
        'How AI helped identify and resolve the issue',
      ],
    },
    {
      title: 'Brett\'s Workflows: Small Feature',
      content: [
        '• Story: Credential management for Spectacular',
        '',
        '• Focused, well-defined task',
        '',
        '• Quick implementation with AI assistance',
      ],
      notes: [
        'Explain the credential management feature',
        'Process of working with AI on this smaller scope task',
      ],
    },
    {
      title: 'Brett\'s Workflows: Medium Feature',
      content: [
        '• Story: Zip file download + R2 upload',
        '',
        '• Clarifying implementation',
        '',
        '• Documenting next steps in Linear',
      ],
      notes: [
        'Share how AI helped implement the zip download feature',
        'Importance of documenting the process and next steps',
      ],
    },
    {
      title: 'Brett\'s Workflows: Larger Feature',
      content: [
        '• Story: Deployments',
        '',
        '• Breaking down complex requirements',
        '',
        '• Iterative implementation',
      ],
      notes: [
        'Explain the deployment feature development',
        'How AI helped with architecture and implementation',
      ],
    },
    {
      title: 'Surprise',
      content: [
        '',
        '',
        'This presentation was created with Claude Code',
        '',
        '',
      ],
      notes: [
        'Reveal that this presentation itself was created using AI assistance',
        'Show how meta this whole thing is',
      ],
    },
    {
      title: 'Q&A',
      content: [
        '',
        '',
        'Questions?',
        '',
        '',
      ],
      notes: [
        'Open the floor for questions',
        'Encourage sharing of personal AI workflow experiences',
      ],
    },
  ],
};