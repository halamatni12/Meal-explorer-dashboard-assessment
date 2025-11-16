import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './features/sidebar/sidebar';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
    standalone: true, 
  imports: [CommonModule,RouterOutlet,Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('meal-explorer');
}
