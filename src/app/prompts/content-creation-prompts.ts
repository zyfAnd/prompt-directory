import { Prompt } from './prompt.interface';

export const contentCreationPrompts: Prompt[] = [
  {
    description: `Develop a comprehensive 1000-word article on [specific topic], including an executive summary, 5 key sections with subheadings, and a conclusion with actionable takeaways.`,
    principlesTitle: 'Content Creation',
    principles: [
      'Include an executive summary',
      'Develop 5 key sections with subheadings',
      'Conclude with actionable takeaways',
      'Ensure comprehensive coverage of the topic'
    ],
    author: 'Content Expert',
    tags: ['Article', 'Writing', 'Content Strategy'],
    category: 'Content Creation'
  }
];