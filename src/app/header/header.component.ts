import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatInputModule, MatButtonModule, FormsModule],
  template: `
    <mat-toolbar class="toolbar">
      <span>Prompts</span>
      <div class="spacer"></div>
      <div class="input-container">
        <input matInput placeholder="Get latest updates" class="custom-input">
        <button mat-raised-button class="subscribe-button">Subscribe</button>
      </div>
    </mat-toolbar>
  `,
  styles: [`
    .toolbar {
      display: flex;
      align-items: center;
      background-color: white;
      color: black;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      padding: 0 16px;
      height: 64px;
    }
    .spacer {
      flex: 1 1 auto;
    }
    .input-container {
      display: flex;
      align-items: center;
      height: 40px;
    }
    .custom-input {
      height: 36px;
      padding: 0 12px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 14px;
      margin-right: 8px;
    }
    .subscribe-button {
      height: 36px;
      line-height: 36px;
      font-size: 14px;
      background-color: black !important;
      color: white !important;
    }
  `]
})
export class HeaderComponent {
  // ... 其他代码保持不变
}
