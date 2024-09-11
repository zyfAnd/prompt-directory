import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PromptCardComponent } from '../prompt-card/prompt-card.component';

interface Prompt {
  description: string;
  principlesTitle: string;
  principles: string[];
  author: string;
  tags: string[];
  category: string;
}

@Component({
  selector: 'app-prompt-list',
  standalone: true,
  imports: [CommonModule, PromptCardComponent],
  template: `
    <div class="prompt-grid">
      <app-prompt-card *ngFor="let prompt of filteredPrompts" [prompt]="prompt"></app-prompt-card>
    </div>
  `,
  styles: [`
    .prompt-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 24px;
      padding: 24px;
    }
  `]
})
export class PromptListComponent implements OnInit {
  prompts: Prompt[] = [];

  filteredPrompts: Prompt[] = [];

  constructor(private route: ActivatedRoute) {
    this.generateRandomPrompts();
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.filteredPrompts = this.prompts.filter(prompt => prompt.category === data['category']);
    });
  }

  generateRandomPrompts() {
    const categories = ['TypeScript', 'Python', 'React'];
    const authors = ['Author A', 'Author B', 'Author C'];
    const tags = [['shadcn', 'radix', '+2 more'], ['django', 'flask', 'machine learning'], ['react', 'redux', 'javascript']];
    const descriptions: { [key: string]: string } = {
      'TypeScript': `
        You are an expert in TypeScript, Node.js, Next.js App Router, React, Shadcn UI, Radix UI and Tailwind.
        
        Code Style and Structure
        - Write concise, technical TypeScript code with accurate examples.
        - Use functional and declarative programming patterns; avoid classes.
        - Prefer iteration and modularization over code duplication.
        - Use descriptive variable names with auxiliary verbs (e.g., isLoading, hasError).
        - Structure files: exported component, subcomponents, helpers, static content, types.
        
        Naming Conventions
        - Use lowercase with dashes for directories (e.g., components/auth-wizard).
        - Favor named exports for components.
        
        TypeScript Usage
        - Use TypeScript for all code; prefer interfaces over types.
        - Avoid enums; use maps instead.
        - Use functional components with TypeScript interfaces.
        
        Syntax and Formatting
        - Use the "function" keyword for pure functions.
        - Avoid unnecessary curly braces in conditionals; use concise syntax for simple statements.
        - Use declarative JSX.
        
        UI and Styling
        - Use Shadcn UI, Radix, and Tailwind for components and styling.
        - Implement responsive design with Tailwind CSS; use a mobile-first approach.
        
        Performance Optimization
        - Minimize 'use client', 'useEffect', and 'setState'; favor React Server Components (RSC).
        - Wrap client components in Suspense with fallback.
        - Use dynamic loading for non-critical components.
        - Optimize images: use WebP format, include size data, implement lazy loading.
        
        Key Conventions
        - Use 'nuqs' for URL search parameter state management.
        - Optimize Web Vitals (LCP, CLS, FID).
        - Limit 'use client':
          - Favor server components and Next.js SSR.
          - Use only for Web API access in small components.
          - Avoid for data fetching or state management.
        
        Follow Next.js docs for Data Fetching, Rendering, and Routing.
      `,
      'Python': `
        You are an expert in Python, Django, Flask, and Machine Learning.
        
        Code Style and Structure
        - Write clean, readable Python code.
        - Follow PEP 8 guidelines.
        - Use virtual environments for project dependencies.
        - Use descriptive variable names.
        - Structure files: modules, packages, and scripts.
        
        Naming Conventions
        - Use lowercase with underscores for module names.
        - Use CamelCase for class names.
        
        Python Usage
        - Use Python 3 for all code.
        - Prefer list comprehensions over loops.
        - Use context managers for resource management.
        
        Syntax and Formatting
        - Use the "def" keyword for functions.
        - Avoid unnecessary parentheses in conditionals.
        - Use f-strings for string formatting.
        
        UI and Styling
        - Use Django templates for server-side rendering.
        - Implement responsive design with Bootstrap.
        
        Performance Optimization
        - Minimize database queries; use select_related and prefetch_related.
        - Use caching for expensive computations.
        - Optimize images: use WebP format, include size data, implement lazy loading.
        
        Key Conventions
        - Use 'django-environ' for environment variables.
        - Optimize Web Vitals (LCP, CLS, FID).
        - Limit 'use client':
          - Favor server-side rendering.
          - Use only for Web API access in small components.
          - Avoid for data fetching or state management.
        
        Follow Django docs for Models, Views, and Templates.
      `,
      'React': `
        You are an expert in React, Redux, and modern JavaScript.
        
        Code Style and Structure
        - Write functional components with hooks.
        - Use Redux for state management.
        - Follow best practices for component design.
        - Use descriptive variable names.
        - Structure files: components, containers, actions, reducers.
        
        Naming Conventions
        - Use PascalCase for component names.
        - Use camelCase for variable and function names.
        
        JavaScript Usage
        - Use ES6+ features for all code.
        - Prefer const and let over var.
        - Use arrow functions for callbacks.
        
        Syntax and Formatting
        - Use the "const" keyword for constants.
        - Avoid unnecessary semicolons.
        - Use template literals for string formatting.
        
        UI and Styling
        - Use Material-UI for components and styling.
        - Implement responsive design with CSS Grid and Flexbox.
        
        Performance Optimization
        - Minimize re-renders with React.memo and useCallback.
        - Use dynamic imports for code splitting.
        - Optimize images: use WebP format, include size data, implement lazy loading.
        
        Key Conventions
        - Use 'react-router' for routing.
        - Optimize Web Vitals (LCP, CLS, FID).
        - Limit 'use client':
          - Favor server-side rendering with Next.js.
          - Use only for Web API access in small components.
          - Avoid for data fetching or state management.
        
        Follow React docs for Hooks, Context, and Suspense.
      `
    };

    for (const category of categories) {
      for (let i = 0; i < 6; i++) {
        this.prompts.push({
          description: descriptions[category],
          principlesTitle: 'Code Style and Structure',
          principles: [
            'Write concise, technical TypeScript code with accurate examples.',
            'Use functional and declarative programming patterns; avoid classes.',
            'Prefer iteration and composition over recursion.'
          ],
          author: authors[Math.floor(Math.random() * authors.length)],
          tags: tags[categories.indexOf(category)],
          category: category
        });
      }
    }
  }
}
