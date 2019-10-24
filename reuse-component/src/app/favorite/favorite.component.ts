import { Component, OnInit, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { concat } from 'rxjs';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  // encapsulation: ViewEncapsulation.Emulated //ViewEncapsulation creates effect same as shadow DOM, so style applied to one component will not affect the other
                              //the style will be constraint to this "favorite" DOM (not need to set, it is default)
})
export class FavoriteComponent {

  @Input() isFavorite: boolean //@Input marks a field, so <favorite> tag can use 'isFavorite' as a property
                               //In app.component.html, <favorite> can take the value of property 'isFavorite'

  @Input('is-selected') isSelected: boolean // is-selected is the alias, where <favorite [is-selected]> 
                                            // can be used instead of <favorite [isSelected]>
  
  @Output() change = new EventEmitter() // define an output 'change', used by <favorite>
  //@Output('change') is an alias same as input
  

  onClick(){
    this.isFavorite = !this.isFavorite
    this.change.emit({newValue: this.isFavorite})  //raise a event, pass event data, in this case json object to all subscribers of the event
  }
}
//export an interface which contains the defination of an object
export interface FavoriteChangedEventArgs {
  newValue: boolean
}
