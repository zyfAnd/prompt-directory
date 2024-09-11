import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, MatListModule],
  template: `
    <mat-nav-list>
      <h3 mat-subheader>Categories</h3>
      <a mat-list-item *ngFor="let category of categories">
        {{ category.name }}
        <span class="count">{{ category.count }}</span>
      </a>
    </mat-nav-list>
  `,
  styles: [`
    h3[mat-subheader] {
      font-size: 14px;
      font-weight: 500;
      color: #666;
      margin-bottom: 16px;
      padding-left: 16px;
    }
    .count {
      float: right;
      color: #888;
    }
  `]
})
export class SidebarComponent {
  categories = [
    { name: 'TypeScript', count: 10 },
    { name: 'Python', count: 8 },
    { name: 'React', count: 7 },
    // ... 添加更多类别
  ];
}
