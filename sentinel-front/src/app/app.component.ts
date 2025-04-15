import { Component } from '@angular/core';
import {LoginComponent} from './login/login.component';
import {HistoryScreenComponent} from './history-screen/history-screen.component';

@Component({
  selector: 'app-root',
  imports: [LoginComponent, HistoryScreenComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sentinel-front';
}
