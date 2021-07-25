
export {}

enum PictureSize {
  Landscape,
  Square,
  Portrait
}

abstract class Item {
  protected readonly _id: number
  protected readonly _title: string
  
  constructor(
    id: number,
    title: string
  ){
    this._id     = id
    this._title  = title
  }

  get id(){
    return this._id
  }

  // set id( id: number ){
  //   this._id = id
  // }

  get title(){
    return this._title
  }

  // set title( title: string ){
  //   this._title = title
  // }
}

class Picture extends Item{
  // Properties
    public static pictureOrien = PictureSize
    private _size: PictureSize

  public constructor( id: number, title: string, size: PictureSize ){
    super( id, title )
    this._size   = size
  }

  get size(){
    return this._size
  }

  set size( s: PictureSize ){
    this._size = s
  }  

  private toString(): string{
    return `[{ id: ${ this.id }, title: ${ this.title }, size: ${ this.size } }]`
  }

}

class Album extends Item{
  // Properties
    private pictures: Picture[]

    public constructor( id: number, title: string ){
      super( id, title )
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

// picture2.id = 200  // Error for readonly
// picture2.title = 'Another Title' // Error for readonly

// album.id = 250 // Works because of get
//album.title = 'ANother xD album' // Error for readonly

console.log( 'album', album )
console.log( 'album', picture2 )

// const item: Item = new Item(1, 'New item !') // erro for abstract class it can't instanciate object
// console.log( 'items',item ) 

console.log( 'Picture Orientation', Picture.pictureOrien.Portrait );