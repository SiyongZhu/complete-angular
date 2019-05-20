import { Component, OnInit } from '@angular/core';
import { FollowersService } from '../services/followers.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  followers: any
  constructor(private service: FollowersService) { }

  ngOnInit() {
    this.service.getAll()
    .subscribe(fol => this.followers = fol)

  }

}
