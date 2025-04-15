import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfile } from '../components/user-profile/user-profile';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, UserProfile],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-project';
  compteur = 0;

  compteurIncremente(val: number) {
    this.compteur += val;
  }
}
