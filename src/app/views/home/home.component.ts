import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  countries: Observable<any[]>;

  constructor(private db: AngularFirestore) {
    this.countries = db.collection('countries').valueChanges();
  }

  ngOnInit() {
  }

}
