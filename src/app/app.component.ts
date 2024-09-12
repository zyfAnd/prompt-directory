import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, SidebarComponent],
  template: `
    <div class="app-container">
      <app-header></app-header>
      <div class="content-container">
        <app-sidebar></app-sidebar>
        <main class="main-content">
          <router-outlet></router-outlet>
        </main>
      </div>
      <footer class="footer">
        <p>© 2024 Yanfu, Inc.</p>
      </footer>
    </div>
  `,
  styles: [`
    .app-container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    .content-container {
      display: flex;
      flex: 1;
    }
    .main-content {
      flex: 1;
      padding: 20px;
    }
    .footer {
      background-color: #f5f5f5;
      padding: 10px 0;
      text-align: center;
      font-size: 14px;
      color: #666;
    }
  `]
})
export class AppComponent {
  title = 'Prompts';
}
