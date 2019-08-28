import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fbAuth: AngularFireAuth, public router: Router) { }

  ngOnInit() {
  }

  login(email: string, password: string) {
    event.preventDefault();
    this.fbAuth.auth.signInWithEmailAndPassword(email, password)
      .then(a => {
        console.log(`Successfully logged in ${email}`);
        this.router.navigate(['./home']);
      })
      .catch(err => {
        console.error(`Login failed: `, err);
      });
  }

}
