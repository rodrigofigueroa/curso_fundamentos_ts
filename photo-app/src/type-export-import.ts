import { Album, PhotoOrientation, Picture, User } from './photo-app'

const user    = new User( 'Luffy', 'Monkey D.')
const album   = new Album( 1, 'Luffy and old guy' )
const picture = new Picture( 1, 'Luffy vs Everything in jail', PhotoOrientation.Landscape )

album.addPictures( picture )
console.log( 'user', user ,'album', album, 'Picture' ,picture )