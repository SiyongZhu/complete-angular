import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // params has a key 'userid' b/c in RouteModule we set path to be follower/:username
    this.route.paramMap
      .subscribe(params => {
        const userId = +params.get('userid'); // using + to convert a string to a number
      });
  }

  // programmatically re-route to different URL
  submit() {
    this.router.navigate(['/followers'], {
      queryParams: { page: 1, order: 'newest' }
    });
  }

}
