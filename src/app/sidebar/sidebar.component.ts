import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { prompts } from '../prompts';

interface Category {
  name: string;
  count: number;
  link: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, MatListModule, RouterModule],
  template: `
    <mat-nav-list class="sidebar-list">
      <h3 mat-subheader class="category-header">Categories</h3>
      <a mat-list-item *ngFor="let category of categories" [routerLink]="category.link">
        <div class="category-item">
          <span class="category-name">{{ category.name }}</span>
          <span class="count">{{ category.count }}</span>
        </div>
      </a>
    </mat-nav-list>
  `,
  styles: [`
    .sidebar-list {
      padding: 0 16px;
    }
    .category-header {
      font-size: 14px;
      color: #666;
      font-weight: normal;
      margin-bottom: 8px;
    }
    .category-item {
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: center;
      font-size: 14px;
    }
    .category-name {
      flex: 1;
      text-align: left;
    }
    .count {
      color: #888;
      min-width: 20px;
      text-align: right;
    }
    ::ng-deep .mat-mdc-list-item-unscoped-content {
      width: 100%;
    }
  `]
})
export class SidebarComponent implements OnInit {
  categories: Category[] = [];

  ngOnInit() {
    this.calculateCategoryCounts();
  }

  calculateCategoryCounts() {
    const categoryCounts = new Map<string, number>();

    prompts.forEach(prompt => {
      const count = categoryCounts.get(prompt.category) || 0;
      categoryCounts.set(prompt.category, count + 1);
    });

    this.categories = Array.from(categoryCounts.entries()).map(([name, count]) => ({
      name,
      count,
      link: `/${name.toLowerCase().replace(/\s+/g, '-')}`
    }));

    this.categories.sort((a, b) => a.name.localeCompare(b.name));
  }
}
