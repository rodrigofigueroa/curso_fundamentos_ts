export {}

enum PictureLandscape{
  small,
  portrait,
  desktop
}
console.log(PictureLandscape );
interface PictureParams { 
  title: string,
  date: string,
  size: PictureLandscape
} 

// Withour Interface
function showPicture( picture: PictureParams ){
  console.log( 
    `title: ${ 
      picture.title 
    }, date: ${
       picture.date 
      }  Size: ${ 
        picture.size
      }`);
}

// Function with Interface
function showPictureWithInterface( picture: 
  { title: string, date: string, size: string } 
){
console.log( `title: ${ picture.title }, date: ${ picture.date }  Size: ${ picture.size }`);
}

const pic = {
  title: 'Brithdays',
  date: '15/24/2020',
  size: PictureLandscape.small
}
showPicture( pic )
showPicture( {title: 'My weeding', date: '12/5/2020', size: PictureLandscape.desktop } )

interface Picture {
  title?: string, //? for optionals
  date?: string
}

function createPicture3 ( conf: Picture ){
  const info = { title: 'Default', date: '10-12-2020'}
    if( conf.title ){
      info.title = conf.title
    }
    if( conf.date ){
      info.date = conf.date
    }
    return info
}

console.log( createPicture3({}) );

console.log( createPicture3({ title: 'My Master', date: '01-2-2021'}) );

// Read only

interface User {
  readonly id: number,
  name: string,
  isPro: boolean
}

let user: User

user = {
  id: 12,
  name: 'Lux',
  isPro: true
}

console.log( 'user', user );
user.name = 'paparazzi'
console.log( 'user', user );
// user.id = 300 Can't be we use readonly
// user.id = 300 // error
console.log( 'user', user );
