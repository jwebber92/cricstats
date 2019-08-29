import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-squad',
  templateUrl: './squad.component.html',
  styleUrls: ['./squad.component.css']
})
export class SquadComponent implements OnInit {
  country: string;
  players: Observable<any[]>;

  constructor(private db: AngularFirestore, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.country = params.country;
    });
    this.players = db.collection('players', ref => ref.where('country', '==', this.country)).valueChanges();
  }

  ngOnInit() {
  }

}
