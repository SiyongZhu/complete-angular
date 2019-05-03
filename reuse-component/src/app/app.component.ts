import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reuse-component';

  post = {
    title: "Title",
    isFavorite: false
  }

  //data type is an object interface defined in favorite.component.ts
  onFavoriteChange(eventArgs: FavoriteChangedEventArgs) {
    console.log("favorite icon clicked: ", eventArgs)
  }

  tweet = {
    body: 'Here is the body of a tweet ...',
    isLike: false,
    likesCount: 0
  }
}
