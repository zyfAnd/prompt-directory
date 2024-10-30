import { Prompt } from './prompts/prompt.interface';
import { typescriptPrompts } from './prompts/typescript-prompts';
import { pythonPrompts } from './prompts/python-prompts';
import { webPrompts } from './prompts/web-prompts';
import { uiuxDesignPrompts } from './prompts/uiux-design-prompts';
import { contentCreationPrompts } from './prompts/content-creation-prompts';
import { softwareDevelopmentPrompts } from './prompts/software-development-prompts';
import { dataAnalysisPrompts } from './prompts/data-analysis-prompts';
import { marketingStrategyPrompts } from './prompts/marketing-strategy-prompts';
import { angularPrompts } from './prompts/angular-prompts';
import { webDeveloperPrompts } from './prompts/web-developer-prompts';
import { businessAnalysisPrompts } from './prompts/business-analysis-prompts';
import { reactPrompts } from './prompts/react-prompts';

export const prompts: Prompt[] = [
  ...typescriptPrompts,
  ...pythonPrompts,
  ...webPrompts,
  ...uiuxDesignPrompts,
  ...contentCreationPrompts,
  ...softwareDevelopmentPrompts,
  ...dataAnalysisPrompts,
  ...marketingStrategyPrompts,
  ...angularPrompts,
  ...webDeveloperPrompts,
  ...businessAnalysisPrompts,
  ...reactPrompts
];

export { Prompt };
