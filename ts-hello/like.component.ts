export class Like{

    constructor(private _total: number, private _state: boolean){
    }

    toggle() {
        // if(this._state == true){
        //     this._state = false
        //     if(this._total > 0){
        //         this._total --
        //     }
        // }else{
        //     this._state = true
        //     this._total ++
        // }
        this._total += (this._state)? -1: 1
        this._state = !this._state
    }

    add() {
        this._total ++
    }

    get state(){
        return this._state
    }

    get total(){
        return this._total
    }
  

}