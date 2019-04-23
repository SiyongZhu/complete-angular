import { Like } from './like.component'

let like = new Like(0, false)
like.toggle()
like.add()
console.log(like.total + ' ' + like.state)