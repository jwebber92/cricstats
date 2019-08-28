import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
// import * as firebase from 'firebase/app';

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
        console.error(email);
        console.log(password);
        console.log(`Successfully logged in ${email}`);
        this.router.navigate(['./home']);
      })
      .catch(err => {
        console.log(email);
        console.log(password);
        console.error(`Login failed: `, err);
      });
  }

}
