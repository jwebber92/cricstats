import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  countries: Observable<any[]>;

  constructor(private db: AngularFirestore, public router: Router) {
    this.countries = db.collection('countries').valueChanges();
  }

  ngOnInit() {
  }

  viewSquad(country: string) {
    console.log('Viewing squad for ' + country);
    this.router.navigate(['./squad', country]);
  }

}
