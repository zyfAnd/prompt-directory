import { Prompt } from './prompt.interface';

export const softwareDevelopmentPrompts: Prompt[] = [
  {
    description: `Generate a Python class for [describe functionality]. Include method definitions, docstrings, and inline comments explaining the logic.`,
    principlesTitle: 'Software Development',
    principles: [
      'Define class methods clearly',
      'Include comprehensive docstrings',
      'Add inline comments for complex logic',
      'Ensure code readability and maintainability'
    ],
    author: 'Software Engineer',
    tags: ['Python', 'OOP', 'Code Documentation'],
    category: 'Software Development'
  }
];