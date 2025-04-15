import { Component, EventEmitter, Input, Output } from "@angular/core";

// user-profile.ts
@Component({
  selector: 'user-profile',
  standalone: true,
  imports: [],
  templateUrl: 'user-profile.html',
  styleUrl: 'user-profile.scss',
})
export class UserProfile {
  @Input()title: any

  @Output() CompteurEmitter = new EventEmitter<number>()

  click(){
    this.CompteurEmitter.emit(1)
  }
  // Component behavior is defined in here
}
