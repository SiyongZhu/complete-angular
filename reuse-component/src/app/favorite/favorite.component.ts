import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { concat } from 'rxjs';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {

  @Input() isFavorite: boolean //@Input marks a field, so <favorite> tag can use 'isFavorite' as a property
                               //In app.component.html, <favorite> can take the value of property 'isFavorite'

  @Input('is-selected') isSelected: boolean // is-selected is the alias, where <favorite [is-selected]> 
                                            // can be used instead of <favorite [isSelected]>
  
  @Output() change = new EventEmitter() // define an output, used by <favorite>
  //@Output('change') is an alias same as input
  

  onClick(){
    this.isFavorite = !this.isFavorite
    this.change.emit({newValue: this.isFavorite})  //raise a event, pass event data to all subscribers of the event
  }
}
//export an interface which contains the defination of an object
export interface FavoriteChangedEventArgs {
  newValue: boolean
}
