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
