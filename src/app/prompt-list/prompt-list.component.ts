import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PromptCardComponent } from '../prompt-card/prompt-card.component';
import { prompts, Prompt } from '../prompts';

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
  filteredPrompts: Prompt[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      const category = data['category'];
      this.filteredPrompts = category 
        ? prompts.filter(prompt => prompt.category === category)
        : prompts;
    });
  }
}
