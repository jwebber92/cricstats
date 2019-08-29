import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

import { CricdataService } from '../../services/cricdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  countries: Observable<any[]>;

  constructor(private db: AngularFirestore, private cricdata: CricdataService) {
    this.countries = db.collection('countries').valueChanges();
  }

  ngOnInit() {
    // this.cricdata.getCountries().subscribe(data => {
    //   console.log(data);
    // });
  }

}
