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
        <span class="category-name">{{ category.name }}</span>
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
    mat-list-item {
      display: flex;
      align-items: center;
      padding: 8px 16px;
      position: relative; /* 使子元素可以使用绝对定位 */
    }
    .category-name {
      font-size: 14px;
      color: #333;
      flex-grow: 1; /* 确保类别名称占据剩余空间 */
    }
    .count {
      font-size: 12px;
      color: #888;
      position: absolute; /* 绝对定位 */
      right: 16px; /* 距离右边缘 16px */
    }
  `]
})
export class SidebarComponent {
  categories = [
    { name: 'TypeScript', count: 10, link: '/typescript' },
    { name: 'Python', count: 8, link: '/python' },
    { name: 'React', count: 7, link: '/react' },
    { name: 'Next.js', count: 6, link: '/nextjs' },
    // ... 添加更多类别
  ];
}
