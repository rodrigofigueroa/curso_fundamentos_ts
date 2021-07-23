export {}

enum PictureSize {
  Landscape,
  Square,
  Portrait
}

class Picture {
  // Properties
    private id: number
    private title: string
    private size: PictureSize

  public constructor( id: number, title: string, size: PictureSize ){
    this.id     = id
    this.title  = title
    this.size   = size
  }

  private toString(): string{
    return `[{ id: ${ this.id }, title: ${ this.title }, size: ${ this.size } }]`
  }

}

class Album {
  // Properties
    private id: number
    private title: string
    private pictures: Picture[]

    public constructor( id: number, title: string ){
      this.id       = id
      this.title    = title
      this.pictures = []
    }

    public addPictures( picture: Picture ){
      this.pictures.push( picture )
    }
}

const album: Album = new Album( 1, 'Finn and Jake ALbum' )
const picture: Picture = new Picture( 1, 'Jake and Me', PictureSize.Landscape )
const picture2: Picture = new Picture( 2, 'Jake playing', PictureSize.Square )

album.addPictures( picture )
album.addPictures( picture2 )

console.log( 'album', album )

// public

// picture2.id = 200  // Error Private
// picture2.title = 'Another Title' // Error Private

// album.id = 250 // Error Private
// album.title = 'ANother xD album' // Error Private

console.log( 'album', album )
console.log( 'album', picture2 )