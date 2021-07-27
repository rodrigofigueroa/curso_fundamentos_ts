// import { Album, PhotoOrientation, Picture, User } from './photo-app'

import { PhotoOrientation } from './photo-orientation'
import { Album }            from "./album"
import { Picture }          from "./picture"
import { User }             from "./user"

const user    = new User( 'Luffy', 'Monkey D.')
const album   = new Album( 1, 'Luffy and old guy' )
const picture = new Picture( 1, 'Luffy vs Everything in jail', PhotoOrientation.Landscape )

user.addAlbum( album )
album.addPictures( picture )

// console.log( 'user', user ,'album', album, 'Picture' ,picture )
console.log( 'user1', user );
user.deleteAlbum( album )
console.log( 'user', user  );
