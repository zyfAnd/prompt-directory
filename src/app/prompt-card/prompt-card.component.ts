import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-prompt-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatChipsModule, MatIconModule, MatButtonModule],
  template: `
    <mat-card class="prompt-card">
      <div class="card-content">
        <p class="prompt-description">{{ prompt.description }}</p>
        <h3 class="principles-title">{{ prompt.principlesTitle }}</h3>
        <ul class="principles-list">
          <li *ngFor="let principle of prompt.principles">{{ principle }}</li>
        </ul>
      </div>
      <mat-card-footer>
        <div class="tags">
          <mat-chip-listbox>
            <mat-chip *ngFor="let tag of prompt.tags">{{ tag }}</mat-chip>
          </mat-chip-listbox>
        </div>
        <div class="actions">
          <button mat-icon-button (click)="copyToClipboard(prompt.description)">
            <mat-icon>content_copy</mat-icon>
          </button>
        </div>
      </mat-card-footer>
    </mat-card>
  `,
  styles: [`
    .prompt-card {
      background-color: #f5f5f5;
      border-radius: 8px;
      padding: 16px;
      height: 300px; /* 固定高度 */
      display: flex;
      flex-direction: column;
      position: relative;
      transition: background-color 0.3s, color 0.3s;
    }
    .prompt-card:hover {
      background-color: #e0e0e0;
    }
    .card-content {
      flex: 1;
      overflow-y: auto;
    }
    .prompt-description {
      font-size: 14px;
      color: #666;
      margin-bottom: 16px;
      transition: color 0.3s;
    }
    .principles-title {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 8px;
      color: #666;
      transition: color 0.3s;
    }
    .principles-list {
      padding-left: 20px;
      margin-bottom: 16px;
    }
    .principles-list li {
      font-size: 14px;
      color: #666;
      margin-bottom: 4px;
      transition: color 0.3s;
    }
    .prompt-card:hover .prompt-description,
    .prompt-card:hover .principles-title,
    .prompt-card:hover .principles-list li {
      color: #333;
    }
    mat-card-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 16px;
      background-color: #fff;
      border-top: 1px solid #eee;
    }
    .tags {
      display: flex;
    }
    mat-chip {
      font-size: 12px;
      background-color: #e0e0e0;
    }
    .actions {
      display: none;
      position: absolute;
      top: 8px;
      right: 8px;
    }
    .prompt-card:hover .actions {
      display: flex;
    }
  `]
})
export class PromptCardComponent {
  @Input() prompt: any;

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      console.log('Text copied to clipboard');
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  }
}
