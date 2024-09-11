import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, MatListModule, RouterModule],
  template: `
    <mat-nav-list>
      <h3 mat-subheader>Categories</h3>
      <a mat-list-item *ngFor="let category of categories" [routerLink]="category.link">
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
    { name: 'TypeScript', count: 10, link: '/typescript' },
    { name: 'Python', count: 8, link: '/python' },
    { name: 'React', count: 7, link: '/react' },
    // ... 添加更多类别
  ];
}
