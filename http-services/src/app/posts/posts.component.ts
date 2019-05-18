import { Component, OnInit } from '@angular/core';

import { PostService } from '../services/post.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any
  

  constructor(private service: PostService) { //set private variable http
    //We should keep constructor light weighted, 
    //not overload it with too many operations
  }

  //ngOnInit is called in component creation lifycycle
  ngOnInit() {
    //http.get() returns Obserable, which has subscribe()
    this.service.getPost()
        .subscribe( 
          response =>{
            this.posts = response
          }, 
          error => {
            alert('An unexpected error occurred')
            console.log(error)
          })
    
    // this.http.get(this.url)
    //     .subscribe( response => {
    //       console.log(response)
    //       this.posts = response
    //     }) 
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value }
    this.service.createPost(post)
        .subscribe( 
          response => {
            post['id'] = response['id']
            this.posts.splice(0, 0, post)
          }, 
          (error: HttpResponse<any>) => {
            if (error.status === 400){

            }else{
              alert('An unexpected error occurred')
              console.log(error)   
            }              
          })
    // this.http.post(this.url, JSON.stringify(post) )
    //           .subscribe( response => {
    //             post['id'] = response['id']
    //             console.log(response)
    //             console.log('post is ' + JSON.stringify(post))
    //             this.posts.splice(0, 0, post) //add new post into posts list as the first one
    //           })
  }

  updatePost(post){
    console.log('update '+JSON.stringify(post))
    post['isRead'] = true
    this.service.updatePost(post)
        .subscribe(
          response => {
            console.log('Update Response: ' + JSON.stringify(response))
        }, 
          error => {
            alert('An unexpected error occurred')
            console.log(error)
          })
    // this.http.patch(this.url+'/'+post.id, JSON.stringify({ isRead:true }))
    //          .subscribe( response => {
    //            console.log('Response: ' + JSON.stringify(response))
    //          })
    // this.http.put(this.url, JSON.stringify(post))
  }

  deletePost(post){
    this.service.deletePost(post.id) 
        .subscribe(
          response => {
            let index = this.posts.indexOf(post)
            this.posts.splice(index, 1)
            console.log(response)
          }, 
          (error: HttpResponse<any>) => {
            if (error.status === 404){
              alert("This post is already deleted")
            } else {
              alert('An unexpected error occurred')
              console.log(error)
            }
            
          })
  }

}
