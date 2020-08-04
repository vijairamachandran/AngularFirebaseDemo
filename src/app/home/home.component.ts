import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output() isLogout = new EventEmitter<void>();
  constructor(public firebaseService: FirebaseService) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('userid') !== null) {
      document.getElementById('lblUser').innerHTML = sessionStorage.getItem('userid');
    }
  }

  logout() {
    this.firebaseService.logout();
    this.isLogout.emit();
  }

}
