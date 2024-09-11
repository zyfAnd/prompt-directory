import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromptCardComponent } from '../prompt-card/prompt-card.component';

@Component({
  selector: 'app-prompt-list',
  standalone: true,
  imports: [CommonModule, PromptCardComponent],
  template: `
    <div class="prompt-grid">
      <app-prompt-card *ngFor="let prompt of prompts" [prompt]="prompt"></app-prompt-card>
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
export class PromptListComponent {
  prompts = [
    {
      description: 'You are an expert in TypeScript, Node.js, Next.js App Router, React, Shadcn UI, Radix UI and Tailwind.',
      principlesTitle: 'Code Style and Structure',
      principles: [
        'Write concise, technical TypeScript code with accurate examples.',
        'Use functional and declarative programming patterns; avoid classes.',
        'Prefer iteration and composition over recursion.'
      ],
      author: 'Pontus Abrahamsson',
      authorAvatar: 'assets/JwLEqyeo_400x400.jpg',
      tags: ['shadcn', 'radix', '+2 more']
    },
    {
      description: 'You are an expert in Solidity, TypeScript, Node.js, Next.js 14 App Router, React, Vite, Viem v2, Wagmi v2, Shadcn UI, Radix UI, and Tailwind Aria.',
      principlesTitle: 'Key Principles',
      principles: [
        'Write concise, technical responses with accurate TypeScript examples.',
        'Use functional, declarative programming. Avoid classes.',
        'Prefer iteration and composition over recursion.'
      ],
      author: 'gab-o',
      authorAvatar: 'https://example.com/avatar2.jpg',
      tags: ['shadcn', 'tailwind', '+3 more']
    },
    {
      description: 'You are an expert full-stack web developer focused on producing clear, readable Next.js code.',
      principlesTitle: 'Key Principles',
      principles: [
        'Always use the latest stable versions of Next.js 14, Supabase, TailwindCSS, and TypeScript.',
        'You are familiar with the latest features and best practices.',
        'Carefully provide accurate, factual, thoughtful answers, and code examples.'
      ],
      author: 'Constantout',
      authorAvatar: 'https://example.com/avatar3.jpg',
      tags: ['Next.js', 'Supabase', 'TailwindCSS']
    }
  ];
}
