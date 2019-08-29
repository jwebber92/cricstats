import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-squad',
  templateUrl: './squad.component.html',
  styleUrls: ['./squad.component.css']
})
export class SquadComponent implements OnInit {
  players: Observable<any[]>;

  constructor(private db: AngularFirestore) {
    this.players = db.collection('players', ref => ref.where('country', '==', 'England')).valueChanges();
  }

  ngOnInit() {
  }

}
