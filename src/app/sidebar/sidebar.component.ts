import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

// Remove this line: import { prompts } from '../prompts';

interface Category {
  name: string;
  count: number;
  link: string;
}

interface CategoryGroup {
  name: string;
  categories: Category[];
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, MatListModule, RouterModule],
  template: `
    <mat-nav-list class="sidebar-list">
      <ng-container *ngFor="let group of categoryGroups">
        <h3 mat-subheader class="category-header">{{ group.name }}</h3>
        <a mat-list-item *ngFor="let category of group.categories" [routerLink]="category.link">
          <div class="category-item">
            <span class="category-name">{{ category.name }}</span>
            <span class="count">{{ category.count }}</span>
          </div>
        </a>
      </ng-container>
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
      margin-top: 16px;
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
  categoryGroups: CategoryGroup[] = [];

  ngOnInit() {
    this.calculateCategoryCounts();
  }

  calculateCategoryCounts() {
    // Move the import inside the method
    import('../prompts').then(module => {
      const prompts = module.prompts;
      const categoryCounts = new Map<string, number>();

      prompts.forEach(prompt => {
        const count = categoryCounts.get(prompt.category) || 0;
        categoryCounts.set(prompt.category, count + 1);
      });

      const programmingLanguages: Category[] = [];
      const acting: Category[] = [];

      categoryCounts.forEach((count, name) => {
        const category: Category = {
          name,
          count,
          link: `/${name.toLowerCase().replace(/\s+/g, '-')}`
        };

        if (['TypeScript', 'Python', 'Angular'].includes(name)) {
          programmingLanguages.push(category);
        } else {
          acting.push(category);
        }
      });

      this.categoryGroups = [
        { name: 'Programming Languages', categories: programmingLanguages.sort((a, b) => a.name.localeCompare(b.name)) },
        { name: 'Acting', categories: acting.sort((a, b) => a.name.localeCompare(b.name)) }
      ];
    });
  }
}
