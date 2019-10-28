import { Component, OnInit } from '@angular/core';

import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadRequestError } from '../common/bad-request-error';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;


  constructor(private service: PostService) { // set private variable http
    // We should keep constructor light weighted,
    // not overload it with too many operations
  }

  // ngOnInit is called in component creation lifycycle
  ngOnInit() {
    // http.get() returns Obserable, which has subscribe()
    this.service.getAll()
    .subscribe( posts => this.posts = posts);
        // .subscribe(
        //   response =>{
        //     this.posts = response
        //   })
          // },
          // error => {
          //   alert('An unexpected error occurred')
          //   console.log(error)
          // })

    // this.http.get(this.url)
    //     .subscribe( response => {
    //       console.log(response)
    //       this.posts = response
    //     })
  }

  createPost(input: HTMLInputElement) {
    const post = { title: input.value };

    input.value = '';

    this.service.create(post)
        .subscribe(
          id => {
            post['id'] = id;
            this.posts.splice(0, 0, post); },
        // .subscribe(
        //   response => {
        //     post['id'] = response['id']
        //     this.posts.splice(0, 0, post)
        //   },
          (error: AppError) => {
            if (error instanceof BadRequestError) {

            } else { throw error; }
          });
    // this.http.post(this.url, JSON.stringify(post) )
    //           .subscribe( response => {
    //             post['id'] = response['id']
    //             console.log(response)
    //             console.log('post is ' + JSON.stringify(post))
    //             this.posts.splice(0, 0, post) //add new post into posts list as the first one
    //           })
  }

  updatePost(post) {
    console.log('update ' + JSON.stringify(post));
    post.isRead = true;
    this.service.update(post)
        .subscribe();
        // ,
        //   error => {
        //     alert('An unexpected error occurred')
        //     console.log(error)
        //   })
    // this.http.patch(this.url+'/'+post.id, JSON.stringify({ isRead:true }))
    //          .subscribe( response => {
    //            console.log('Response: ' + JSON.stringify(response))
    //          })
    // this.http.put(this.url, JSON.stringify(post))
  }

  deletePost(post) {
    this.service.delete(post.id)
        .subscribe(
          () => {
            const index = this.posts.indexOf(post);
            this.posts.splice(index, 1);
          },
          (error: AppError) => {
            if (error instanceof NotFoundError) {
              alert('This post is already deleted');
            }
          });
  }

}
