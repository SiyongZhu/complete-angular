import { Component, OnInit } from '@angular/core';
import { FollowersService } from '../services/followers.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  followers: any

  constructor(
    private route: ActivatedRoute,
    private service: FollowersService) { }

  ngOnInit() {
    // we can use snapshot to get the parameters from URL as a simple way
    // let userId = this.route.snapshot.paramMap.get('userid')
    // let page = this.route.snapshot.queryParamMap.get('page')

    //We can subscribe to two Observables by using combineLatest()
    // combineLatest([
    //   this.route.paramMap,
    //   this.route.queryParamMap
    // ])
    // .subscribe(combined => {
    //   let userId = combined[0].get('userid')
    //   let page = combined[1].get('page')
    //   console.log(userId + " " + page)
    //   this.service.getAll()  //<- service.getAll() used to be inside ngOnInit(), now we have an subscribe inside another subscribe
    //     .subscribe(fol => this.followers = fol)

    // })

    // this.service.getAll()
    //     .subscribe(fol => this.followers = fol)

    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .pipe(switchMap(combined => {
      let userId = combined[0].get('userid')
      let page = combined[1].get('page')
      return this.service.getAll()
    }))
    .subscribe(followers => this.followers = followers)
  }

}
