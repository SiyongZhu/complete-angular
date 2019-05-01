import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: String, args?: any): any {
    if (!value) return null
    let words: String[] = value.split(" ")
    let prepositions: String[] = [
      'of', 'the'
    ]
    let title: String = ""

    for(let i=0; i<words.length; i++){
      if (this.isPreposition(words[i])) {
        title += (words[i].toLowerCase() + " ")
      }
      else {
        title += (words[i].charAt(0).toUpperCase() + words[i].slice(1)+" ")
      }   
    }
    return title;
  }

  private isPreposition(word: String): boolean {
    let prepositions: String[] = [
      'of', 'the'
    ]
    if (prepositions.includes(word.toLocaleLowerCase())){
      return true
    }else{
      return false
    }
     
  }

}
