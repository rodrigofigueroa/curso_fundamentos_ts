export {}

enum PictureOrientation {
  Landscape,
  Portrait,
  Small,
  Desktop
}

interface Entity {
  id: number,
  title: string
}

interface Album extends Entity {
  description: string
}

interface Picture extends Entity {
  size: PictureOrientation
}

let album: Album = {
  id: 1,
  title: 'Meetings',
  description: 'My meetings around the world'
}

const picture = {
  id: 2,
  title: 'My Little Cat',
  size: PictureOrientation.Landscape
} as Picture


let myNePicture = (<Picture>{
  id: 3,
  title: 'Other one',
  size: PictureOrientation.Portrait
})

console.log( 'album', album );
console.log( 'picture', picture );
console.log( 'newPicture', myNePicture );